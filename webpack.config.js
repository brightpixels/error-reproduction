const appRoot = "src";
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: [
    "webpack-dev-server/client?http://localhost:7002",
    "webpack/hot/only-dev-server",
    __dirname + "/" + appRoot + "/index.js"
  ],
  output: {
    path: __dirname + "/public/",
    publicPath: "/",
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /(node_modules|bower_components)/,
        use: ["babel-loader"]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: "url-loader"
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: "url-loader?limit=131072"
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(js|jsx)/,
        use: "eslint-loader"
      }
    ]
  },
  devtool: "cheap-module-source-map",
  devServer: {
    disableHostCheck: true,
    contentBase: __dirname + "./public"
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      filename: "./index.html",
      template: "./index.ejs"
    })
  ],
  resolve: {
    extensions: [".js", ".jsx"],
    mainFiles: ["index"]
  }
};
