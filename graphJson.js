const a = {
  root: {
    path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/index.js",
    imports: {
      "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js":
        [
          {
            type: "deconstruct",
            imported: "aa1",
            local: "aa1",
          },
          {
            type: "deconstruct",
            imported: "aa2",
            local: "aa2",
          },
        ],
    },
    exports: [],
    subModules: {
      "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js":
        {
          path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js",
          imports: {
            "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
              [
                {
                  type: "default",
                  local: "b",
                },
              ],
          },
          exports: [
            {
              type: "named",
              exported: "aa1",
              local: "aa1",
            },
            {
              type: "named",
              exported: "aa2",
              local: "aa2",
            },
          ],
          subModules: {
            "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
              {
                path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
                imports: {
                  "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
                    [
                      {
                        type: "deconstruct",
                        imported: "cc",
                        local: "renamedCc",
                      },
                    ],
                },
                exports: [
                  {
                    type: "default",
                    exported: "b",
                  },
                ],
                subModules: {
                  "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
                    {
                      path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                      imports: {},
                      exports: [
                        {
                          type: "named",
                          exported: "cc",
                          local: "cc",
                        },
                      ],
                      subModules: {},
                    },
                },
              },
          },
        },
    },
  },
  allModules: {
    "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
      {
        path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
        imports: {},
        exports: [
          {
            type: "named",
            exported: "cc",
            local: "cc",
          },
        ],
        subModules: {},
      },
    "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
      {
        path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
        imports: {
          "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
            [
              {
                type: "deconstruct",
                imported: "cc",
                local: "renamedCc",
              },
            ],
        },
        exports: [
          {
            type: "default",
            exported: "b",
          },
        ],
        subModules: {
          "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
            {
              path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
              imports: {},
              exports: [
                {
                  type: "named",
                  exported: "cc",
                  local: "cc",
                },
              ],
              subModules: {},
            },
        },
      },
    "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js":
      {
        path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js",
        imports: {
          "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
            [
              {
                type: "default",
                local: "b",
              },
            ],
        },
        exports: [
          {
            type: "named",
            exported: "aa1",
            local: "aa1",
          },
          {
            type: "named",
            exported: "aa2",
            local: "aa2",
          },
        ],
        subModules: {
          "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
            {
              path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
              imports: {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
                  [
                    {
                      type: "deconstruct",
                      imported: "cc",
                      local: "renamedCc",
                    },
                  ],
              },
              exports: [
                {
                  type: "default",
                  exported: "b",
                },
              ],
              subModules: {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
                  {
                    path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                    imports: {},
                    exports: [
                      {
                        type: "named",
                        exported: "cc",
                        local: "cc",
                      },
                    ],
                    subModules: {},
                  },
              },
            },
        },
      },
    "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/index.js":
      {
        path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/index.js",
        imports: {
          "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js":
            [
              {
                type: "deconstruct",
                imported: "aa1",
                local: "aa1",
              },
              {
                type: "deconstruct",
                imported: "aa2",
                local: "aa2",
              },
            ],
        },
        exports: [],
        subModules: {
          "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js":
            {
              path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/a.js",
              imports: {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
                  [
                    {
                      type: "default",
                      local: "b",
                    },
                  ],
              },
              exports: [
                {
                  type: "named",
                  exported: "aa1",
                  local: "aa1",
                },
                {
                  type: "named",
                  exported: "aa2",
                  local: "aa2",
                },
              ],
              subModules: {
                "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js":
                  {
                    path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/b.js",
                    imports: {
                      "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
                        [
                          {
                            type: "deconstruct",
                            imported: "cc",
                            local: "renamedCc",
                          },
                        ],
                    },
                    exports: [
                      {
                        type: "default",
                        exported: "b",
                      },
                    ],
                    subModules: {
                      "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js":
                        {
                          path: "/Users/guang/code/babel-plugin-exercize/exercize-module-iterator/test-project/c/index.js",
                          imports: {},
                          exports: [
                            {
                              type: "named",
                              exported: "cc",
                              local: "cc",
                            },
                          ],
                          subModules: {},
                        },
                    },
                  },
              },
            },
        },
      },
  },
};
