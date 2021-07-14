# 一、简答题

#### 1、Webpack 的构建流程主要有哪些环节？如果可以请尽可能详尽的描述 Webpack 打包的整个过程。

　

　

　

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