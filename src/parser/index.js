const acorn = require("acorn");

const syntaxPlugins = {
    'literal': require('./plugins/literal'),
}

const defaultOptions = {
    plugins: []
}

function parse(code, options) {
    const resolvedOptions  = Object.assign({}, defaultOptions, options);
    console.log(resolvedOptions.plugins, 999)
    const newParser = resolvedOptions.plugins.reduce((Parser, pluginName) => {
        let plugin = syntaxPlugins[pluginName]
        return plugin ? Parser.extend(plugin) : Parser; 
    }, acorn.Parser);
    return newParser.parse(code, {
        locations: true
    });
}

const code = parse(`var a = 90`, {})

console.log(code)

module.exports = {
    parse
}


