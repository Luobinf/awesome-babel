const path = require("path");
const parser = require("@babel/parser");
const fs = require("fs");
const traverse = require("@babel/traverse").default;

const IMPORT_TYPE = {
  DECONSTRUCT: "deconstruct",
  DEFAULT: "default",
  NAMESPACE: "namespace",
};

const EXPORT_TYPE = {
  ALL: "all",
  DEFAULT: "default",
  NAMED: "named",
};

class GraphNode {
  constructor(path = "", imports = {}, exports = []) {
    this.path = path;
    this.imports = imports;
    this.exports = exports;
    this.subModules = {};
  }
}

// console.log(completeModulePath(entryPath), 99);

// console.log(entryPath)

// path\import\export\allModules

// import 需要考虑多种情况。import {} from '', import xx from '', import xx as a from '',

let visitedModules = new Set();


const graph = generateDependencyGraph(path.join(__dirname, './index.js'))

console.log(graph)


function generateDependencyGraph(curModulePath) {
  const dependenciyGraph = {
    root: new GraphNode(),
    allModules: {},
  };
  traverseJsModule(
    curModulePath,
    dependenciyGraph.root,
    dependenciyGraph.allModules
  );
  return dependenciyGraph;
}

function traverseJsModule(curModulePath, graphNode, allModules) {
  const entryContent = fs.readFileSync(curModulePath, "utf8");
  const ast = parser.parse(entryContent, {
    sourceType: "unambiguous",
  });

  graphNode.path = curModulePath;

  traverse(ast, {
    ImportDeclaration(path) {
      const subModulePath = moduleResolver(
        curModulePath,
        path.get("source.value").node
      );
      if (!subModulePath) {
        return;
      }
      const specifiers = path.get("specifiers");
      graphNode.imports[subModulePath] = specifiers.map(
        (specifiersPath) => {
          if (specifiersPath.isImportSpecifier()) {
            return {
              type: IMPORT_TYPE.DECONSTRUCT,
              imported: specifiersPath.get("imported").node.name,
              local: specifiersPath.get("local").node.name,
            };
          } else if (specifiersPath.isImportDefaultSpecifier()) {
            return {
              type: IMPORT_TYPE.DEFAULT,
              local: specifiersPath.get("local").node.name,
            };
          } else if (specifiersPath.isImportNamespaceSpecifier()) {
            return {
              type: IMPORT_TYPE.NAMESPACE,
              local: specifiersPath.get("local").node.name,
            };
          }
        }
      );
      const subModules = new GraphNode();
      traverseJsModule(subModulePath, subModules, allModules);
      graphNode.subModules[subModulePath] = subModules;
    },

    ExportNamedDeclaration(path) {
      const specifiers = path.get("specifiers");
      graphNode.exports = specifiers.map((specifiersPath) => {
        return {
          type: EXPORT_TYPE.NAMED,
          exported: specifiersPath.get("exported").node.name,
          local: specifiersPath.get("local").node.name,
        };
      });
    },

    ExportDefaultDeclaration(path) {
      graphNode.exports.push({
        type: EXPORT_TYPE.DEFAULT,
        exported: path.get("declaration").node.name,
      })
    },

    ExportAllDeclaration(path) {
      graphNode.exports.push({
        type: EXPORT_TYPE.ALL,
        source: path.get("source").node.value,
      });
    },
  });

  allModules[curModulePath] = graphNode;

}

function moduleResolver(currentModulePath, requireModulePath) {
  requireModulePath = path.resolve(
    path.dirname(currentModulePath),
    requireModulePath
  );

  // 过滤掉第三方模块
  if (requireModulePath.includes("node_modules")) {
    return "";
  }

  requireModulePath = completeModulePath(requireModulePath);

  if (visitedModules.has(requireModulePath)) {
    return "";
  } else {
    visitedModules.add(requireModulePath);
  }

  return requireModulePath;
}

function completeModulePath(modulePath) {
  if (modulePath.match(/\.[j|t]s[x]?$/)) {
    return modulePath;
  }

  // 是一个目录，类似直接使用 /journey，实际上用的是 /journey/index
  if (isDirectory(modulePath)) {
    const completePath = tryCompletePath((ext) =>
      path.join(modulePath, "index" + ext)
    );
    if (!completePath) {
      return reportModuleNotFoundError(modulePath);
    }
    return completePath;
  } else {
    const completePath = tryCompletePath((ext) => modulePath + ext);
    if (!completePath) {
      return modulePath;
    }
    return completePath;
  }
}

function isDirectory(filePath) {
  if (fs.existsSync(filePath)) {
    return true;
  }
  return false;
}

function reportModuleNotFoundError(modulePath) {
  return (
    "module is not found:" +
    modulePath +
    ", " +
    "please check your path and try again."
  );
}

function tryCompletePath(func) {
  const SUFFIX = [".js", ".jsx", ".ts", ".tsx"];
  for (let i = 0; i < SUFFIX.length; i++) {
    const curPath = func(SUFFIX[i]);
    if (fs.existsSync(curPath)) {
      return curPath;
    }
  }
}
