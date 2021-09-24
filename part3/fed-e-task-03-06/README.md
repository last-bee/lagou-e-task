## 新作业

#### 解答题：

**1.说说 application/json 和 application/x-www-form-urlencoded 二者之间的区别。**
application/json请求数据格式为JSON对象
application/x-www-form-urlencoded以键值对形式？key1=value1&key2=value2的方式发送到服务器，



　

**2.说一说在前端这块，角色管理你是如何设计的。**
1. 设置权限，细分到每个路由与功能
2. 设置角色包括多个权限
3. 给用户赋值多种角色
　

　

**３.@vue/cli 跟 vue-cli 相比，@vue/cli 的优势在哪？**

1. 开箱即用，直接安装使用，不用单独配置。
2. 把 vue-cli 很多功能封装比如webpack config等文件，防止新手操作会引起系统启动不起来。
3. 设置vue.config.js，可以进行定制化操作，不需要像vue-cli改动原始文件。

　

**４.详细讲一讲生产环境下前端项目的自动化部署的流程。**
1. 安装JDK与jenkins
2. 安装成功会启动 http://localhost:8000 
3. 按照提示找到对应的文件（直接复制路径在我的电脑中打开），其中有管理员密码
4. 创建管理员用户，点击完成并保存，然后一路下一步。
5. 配置完成后自动进入首页，这时点击 Manage Jenkins -> Manage plugins 安装插件。
6. 点击 可选插件，输入 nodejs，搜索插件，然后安装。
7. 安装完成后回到首页，点击 Manage Jenkins -> Global Tool Configuration 配置 nodejs。
8. 点击增加构建步骤，windows 要选 execute windows batch command，linux 要选 execute shell。
9. 构建命令输入 npm i && npm run build && xcopy .\build* G:\node-server\dist\ /s/e/y，这行命令的作用是安装依赖，构建项目，并将构建后的静态资源复制到指定目录 G:\node-server\dist\。这个目录是静态服务器资源目录(自行修改为你的服务器资源目录)
10. 保存后，返回首页。点击项目旁边的小三角，选择 build now, 开始构建项目，我们可以点击项目查看构建过程, 最后输出finished success 就构建成功了
　

　

**５.你在开发过程中，遇到过哪些问题，又是怎样解决的？请讲出两点。**
1. 要求分享的页面支持人脸识别，在微信内部不支持
 1）在微信里面不支持阿里与百度的人脸识别
 2）解决方案，在微信浏览器里提示用于用默认浏览器打开
 3）人脸识别成功之后，返回到微信，重新进行结果查询。
2. 分享页面给客户要求可以控制对方的页面
  利用websocket建立链接，当页面发生滚动点击操作时候，通过websocket发送指令，客户页面收到指令进行相应的页面展示。
　

　

**６.针对新技术，你是如何过渡到项目中？**
1. 考虑时间与人员
2. 学习新技术，查找资料，把大部分的原理掌握，创建demo
3. 等自己技术逐渐成熟，迁移低等级的页面，如关于我们一类的。
4. 慢慢迁移其他功能。
　

　



## 原作业

1.完成视频中老师提出的作业要求

2.100% 还原视频中所讲到的内容

3.完成剩下的几个模块

4.没有权限的模块，暂时不做啊，比如删除（删除东西容易导致服务器崩了）



**作业接口文档地址**

http://113.31.104.154:8081/doc.html#/home

http://113.31.104.154:8010/doc.html#/home

如果ip访问出现问题 请访问下面的

```
http://edufront.lagou.com/front/doc.html#/home
```

```
http://eduboss.lagou.com/boss/doc.html#/home
```

　

**原型图 地址**

eduboss.lagou.com

用户账号 密码

[http://eduboss.lagou.com](http://eduboss.lagou.com/)

用户名：15510792995     密码：111111
用户名：18201288771     密码：111111

　

**硬性要求**

大家不要在3-6的系统中删除数据，可以自己新增，修改或是删除自己新增的数据，否则服务器总是出问题哈

学员自己的资源 name有固定前缀 比如: 共用前缀test + 自己前缀+业务名称diy， 比如： test_lnw_menu1

作业要求:凡是里面没有权限的模块，都可以不用做哈