const presets = [
  [
    "@babel/preset-env",
    {
      modules: false
    }
  ],
  "@babel/preset-react",
  "@babel/preset-flow"
];

if (process.env.NODE_ENV === "test") {
  presets[0] = "@babel/presets-env";
}

const plugins = [
  "@babel/plugin-proposal-export-default-from",
  "@babel/plugin-proposal-export-namespace-from",
  "@babel/plugin-syntax-dynamic-import",
  "@babel/plugin-syntax-import-meta",
  ["@babel/plugin-proposal-class-properties", { loose: false }],
  "@babel/plugin-proposal-json-strings",
  "@babel/plugin-proposal-object-rest-spread",
  ["@babel/plugin-transform-runtime", { helps: false, regenerator: true }]
];
module.exports = {
  presets,
  plugins
};
