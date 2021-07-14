# 一、简答题

#### 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。
##### 1. 初始化参数
* 根据命令输入参数，webpack.config.js 参数，得到打包的配置
##### 2. 进行编译
* 根据配置，初始化一个compiler对象，注册所有的plugin
* 遍历插件监听 webpack 构建过程的声明周期钩子函数，根据plugin的参数进行编译
##### 3. 确定入口文件
* 根据entry的入口，可以使多个如果，根据入口解析AST，找出依赖关系，进行递归
##### 4. 对loader进行编译
* 根据modlue rules 进行 test匹配
* 根据不同的依赖文件，根据use的loader从后到前编译，直到编译完成
##### 5. 完成编译并输出
* 递归输出之后，得到每一个文件的结果
* 根据output配置信息生成对应的文件（支持hash）
　

　

　

#### 2、Loader 和 Plugin 有哪些不同？请描述一下开发 Loader 和 Plugin 的思路。
#### Loader
* 使用test正则匹配一定的规则
* loader是文件加载器，负责文件从输入到输出的转换
* 对于同个文件用多个loader，从后往前执行，把处理好的内容交给下一个loader
* loader可以再options配置参数
　
#### Plugin
* Plugin是个 class， 是webpack的扩展
* 根据打包的生命周期，触发钩子函数
* Plugin在loader执行完成，在生命周期中触发钩子函数，扩展一些功能

#### Loader开发思路
* 安装loader-utils
* 通过getOptions获取参数
* 根据source资源进行操作
* 将处理过后的值调用 return `export default ${ result }` or this.callback(null, result)

#### Plugin开发思路
* 插件名称 class
* 插件上的 apply( compiler ) 方法
* 调用compiler.hooks.done.tap('PluginName', (stats) => {
*		// 插件处理逻辑
* })

　

　

# 二、编程题

#### 1、使用 Webpack 实现 Vue 项目打包任务

具体任务及说明：

1. 在 code/vue-app-base 中安装、创建、编辑相关文件，进而完成作业。
2. 这是一个使用 Vue CLI 创建出来的 Vue 项目基础结构
3. 有所不同的是这里我移除掉了 vue-cli-service（包含 webpack 等工具的黑盒工具）
4. 这里的要求就是直接使用 webpack 以及你所了解的周边工具、Loader、Plugin 还原这个项目的打包任务
5. 尽可能的使用上所有你了解到的功能和特性

### webpack 的项目配置
[项目链接](https://www.yuque.com/liubiao-ir9t7/bb6560/hzubxr)

* 项目对应的目录 /code/vue-app-base

## 使用 Webpack 实现 Vue 项目打包任务
### 创建webpack.common.js、webpack.dev.js、 webpack.prod.js

- 配置 package.json 文件
```javascript
"scripts": {
  "serve": "webpack serve --mode=development --config=webpack.dev.js",
  "build": "webpack build --config=webpack.prod.js",
}
```
### 设置 webpack 的入口/出口
```javascript
// webpack.common.js
const path = require('path')
module.exports = {
  entry: './src/main.js',
  output: {
  	path: path.resolve(__dirname, 'dist'),
  	filename: "[name].js"
  }
}
```
### 设置 webpack-dev-server
```javascript
// yarn 安装 webpack-dev-server webpack-merge
yarn add webpack-dev-server webpack-merge --dev

// webpack.dev.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { DefinePlugin } = require('webpack')
process.env.NODE_ENV = 'development' // 在 src 文件可以使用

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
        target: 'https://github.com',// 服务端代理域名
        changeOrigin: true,
        pathRewrite: { '^/api': '' },
      },
    },
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "/public/",
    }),
  ]
}
// yarn serve 可以本地启动服务
// 会报错 BASE_URL is not defined，需要配置 BASE_URL
// localhost:8080/api 可以获取github网站内容
                       
```
![image.png](https://cdn.nlark.com/yuque/0/2021/png/21435701/1626162951168-00c3ab33-fe0b-4fb1-9b9f-79b60d456502.png#align=left&display=inline&height=828&id=uc0d3d953&margin=%5Bobject%20Object%5D&name=image.png&originHeight=828&originWidth=1018&size=470322&status=done&style=none&width=1018)
### 设置html-webpack-plugin
```javascript
// webpack.common.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')


module.exports = {
  entry: './src/main.js',
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
      }
    }),
  ]
}
```


### 设置vue文件
```javascript
// yarn 安装 vue-loader vue-template-compiler 
yarn add vue-loader vue-template-compiler --dev  

// webpack.common.js
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
      }
    }),
    new VueLoaderPlugin()
  ]
}
```
### 设置css、less
```javascript
// 安装 css-loader less-loader vue-style-loader
yarn add css-loader less-loader vue-style-loader --dev

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { DefinePlugin } = require('webpack')
process.env.NODE_ENV = 'development' // 在 src 文件可以使用

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',// 设置source-map
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
        target: 'https://github.com',// 服务端代理域名
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
          }
        ]
      },
      {
        test: /\.less/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
    ]
  },
  plugins: [
    new DefinePlugin({
      BASE_URL: "/public/",
    }),
  ]
}
```
### 设置图片的引入
```javascript
// 安装 url-loader
yarn add url-loader --dev


// webpack.common.js
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
        test: /\.(png|jpe?g|svg|gif)(\?.*)?$/, // 图片格式匹配
        loader: 'url-loader',
        options: {
          limit: 1024 * 10 // 10k以下base64编码
        }
      },
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
      }
    }),
    new VueLoaderPlugin()
  ]
}
```
### 编译前清空对应的包
```javascript
// 安装 clean-webpack-plugin
yarn add clean-webpack-plugin

// webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack') 
const path = require('path')
process.env.NODE_ENV = 'production'


module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: ['vue-style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new DefinePlugin({
      BASE_URL: "/public/",
    }),
  ]
})
```
### build css 样式的分离

- yarn add mini-css-extract-plugin --dev
```javascript
// 安装 mini-css-extract-plugin
yarn add mini-css-extract-plugin --dev

// webpack.prod.js
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { DefinePlugin } = require('webpack') 
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

process.env.NODE_ENV = 'production'


module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
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
```
### 压缩 css 与 Js 文件

- yarn add optimize-css-assets-webpack-plugin terser-webpack-plugin --dev



```javascript
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
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
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
```
### babel设置

- yarn add babel-loader @babel/core @babel/preset-env @vue/babel-preset-app --dev
```javascript
// babel.config.js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    "@babel/preset-env"
  ]
}
```
```javascript
// webpack.common.js
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
      }
    }),
    new VueLoaderPlugin()
  ]
}
```
### 打包输出名称hash

- hash 工程基本，修改任何一个文件所有的文件都会改变
- chunkhash 根据入口文件进行解析，在生产环境里把一些公共库和程序入口文件区分开，单独打包构建，接着我们采用chunkhash的方式生成哈希值，那么只要我们不改动公共库的代码，就可以保证其哈希值不会受影响。
- contenthash  是针对文件内容级别的，只有你自己模块的内容变了，那么hash值才改变。
- 入口输出文件用chunkhash
- css文件设置为contenthash
```javascript
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
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ],
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash:8].js"
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
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
```
### 公共模块拆分
```javascript
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
  mode: 'production',
  devtool: false,
  optimization: {
    minimizer: [
      new OptimizeCssAssetsWebpackPlugin(),
      new TerserWebpackPlugin()
    ],
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /(vue)/
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
```


**提示：(开始前必看)**

在视频录制后，webpack 版本以迅雷不及掩耳的速度升级到 5，相应 webpack-cli、webpack-dev-server 都有改变。

项目中使用服务器的配置应该是改为下面这样：

```json
// package.json 中部分代码
"scripts": {
	"serve": "webpack serve --config webpack.config.js"
}
```

vue 文件中 使用 style-loader 即可

**其它问题, 可先到 https://www.npmjs.com/ 上搜索查看相应包的最新版本的配置示例, 可以解决大部分问题.**



#### 作业要求

本次作业中的编程题要求大家完成相应代码后

- 提交一个项目说明文档，要求思路流程清晰。
- 或者简单录制一个小视频介绍一下实现思路，并演示一下相关功能。
- 最终将录制的视频或说明文档和代码统一提交至作业仓库。