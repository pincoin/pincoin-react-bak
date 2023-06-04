const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

const webpack = require("webpack")
const dotenv = require("dotenv")

dotenv.config()

module.exports = {
  entry: "./src/index.tsx",
  output: {
    path: __dirname + "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        use: ["file-loader"],
      },
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        resolve: {
          extensions: [".ts", ".tsx", ".js", ".json"],
        },
        use: ["ts-loader"],
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      title: process.env.REACT_APP_TITLE,
    }),
    new MiniCssExtractPlugin(),
  ],
  devServer: {
    port: 3000,
    hot: true,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
}
