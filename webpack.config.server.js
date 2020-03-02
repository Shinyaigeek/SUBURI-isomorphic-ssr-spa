const path = require("path");
const common = require("./webpack.config.common")

module.exports = {
  ...common,
  entry: {
    main: "./src/App.tsx",
  },
  output: {
    libraryTarget: "commonjs"
  }
};
