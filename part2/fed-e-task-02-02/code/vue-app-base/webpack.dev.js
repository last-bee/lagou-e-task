const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { DefinePlugin } = require('webpack')
const path = require('path')

process.env.NODE_ENV = 'development'

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: "[name].js"
  },
  devServer: {
    contentBase: './dist',
    compress: true,
    hotOnly: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://github.com',
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader'
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.less/,
        use: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "/public/",
      process: JSON.stringify(
        { 
          env: {
            ...process.env,
            NODE_ENV: 'development'
          }
        }
      )
    }),
  ]
})