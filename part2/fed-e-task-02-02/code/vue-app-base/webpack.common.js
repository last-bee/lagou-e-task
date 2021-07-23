const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  entry: './src/main.js',
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          hotReload: true // 关闭热重载
        }
      },
      {
        test: /\.(png|jpe?g|svg|gif)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1024 * 10 // 10k以下base64编码
        }
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          // options: {
          //   presets: [
          //     ['@babel/preset-env', { targets: "defaults" }]
          //   ]
          // }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'production-name',
      template: path.resolve(__dirname, 'public', './index.html'),
      // filename: 'index.html', // 默认值
      meta: {
        viewport: 'width=device-width, initial-scale=1.0'
      },
      minify: {
        removeComments: true, //去注释
        collapseWhitespace: true, //压缩空格
        removeAttributeQuotes: true //去除属性引用
      },
      favicon: path.resolve(__dirname, 'public', 'favicon.ico')
    }),
    new VueLoaderPlugin()
  ]
}