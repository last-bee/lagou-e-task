const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack') 
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
process.env.NODE_ENV = 'production'


module.exports = merge(common, {
  mode: 'none',
  devtool: false,
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(vue)/,
          name: 'vue.min.js',
          chunks: 'all'
        }
      },
      chunks: 'all',//所有的库分离 //async 异步库进行分离（默认）  initial 同步库进行分离
      minSize: 10000, //最小值体积（bt）
      maxSize: 0,
      minChunks: 1, // 拆分前必须共享模块的最小 chunks 数。
    }
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader','less-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css"
    }),
    new CleanWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: "/public/",
      process: JSON.stringify(
        { 
          env: {
            ...process.env,
            NODE_ENV: 'production'
          }
        }
      )
    }),
  ]
})