module.exports = {
  entry: {
    web: __dirname + "/packages/core/index.ts",
  },
  output: {
    path: __dirname + "/dist",
    name: 'core.js'
  },
};