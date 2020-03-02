const path = require("path");
const common = require("./webpack.config.common")

module.exports = {
  ...common,
  entry: {
    client: "./src/client.tsx",
  },
  output: {
    // libraryTarget: "umd"
  }
};
