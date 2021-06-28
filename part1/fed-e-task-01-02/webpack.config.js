const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // entry: './promise.js',
  mode: 'none',
  stats: 'none',
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin()
  ]
}
