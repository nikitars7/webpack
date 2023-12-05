import { Configuration, DefinePlugin } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import HtmlWebpackPlugin from "html-webpack-plugin";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";
import webpack from "webpack";
import path from "path";
import { BuildOptions } from "./types/types";
export const buildPlugins = ({
  mode,
  paths,
  analyzer,
  platform,
}: BuildOptions): Configuration["plugins"] => {
  const isDev = mode === "development";
  const plugins: Configuration["plugins"] = [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, "favicon.ico"),
    }),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
    }),
  ];
  if (isDev) {
    plugins.push(new webpack.ProgressPlugin());
    //Выносит проверку типов в отдельный процесс
    plugins.push(new ForkTsCheckerWebpackPlugin());
    plugins.push(new ReactRefreshWebpackPlugin());
  } else {
    plugins.push(
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      })
    );
    plugins.push(
      new CopyPlugin({
        patterns: [
          { from: path.resolve(__dirname,paths.public ,'locales'), to: path.resolve(paths.output,'locales') },

        ],
      })
    );
    if (analyzer) {
      plugins.push(new BundleAnalyzerPlugin());
    }
  }
  return plugins;
};
