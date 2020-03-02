const path = require('path')

module.exports = {
  mode: "development",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js"
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        loader: "ts-loader"
      },
      {
        test: /\.js(x?)$/,
        loader: "babel-loader"
      }
    ]
  }
};
