/// <reference path="node_modules/webpack-dev-server/types/lib/Server.d.ts"/>
import * as path from "path";
import { Configuration } from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";

const config: Configuration = {
  entry: "./src/index.tsx",
  devtool: "source-map",
  plugins: [new HtmlWebpackPlugin({template: './public/index.html'})],
  module: {
    rules: [
      {
        test: /\.(ts|js|tsx|jsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-typescript", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    static: path.join(__dirname, "public"),
    compress: true,
    port: 4000
  }
}

export default config;
