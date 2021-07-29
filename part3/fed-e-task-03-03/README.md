# 编程题

#### 使用 NuxtJS 实现 RealWorld 全部功能

## 项目 github 仓库地址↓(https://github.com/last-bee/realworld-nuxt)

[github链接](https://github.com/last-bee/realworld-nuxt)

## 项目 demo 地址↓(http://realworld.lastbee.cn/)
[项目 demo 链接](http://realworld.lastbee.cn/)

---

## 项目总结
### 路由配置
* 默认方式是pages里面对应路由，项目中不常用，记着几个知识点
  * pages name 就是路由名，文件夹内为子路由，_开头为动态路由。
* nuxt.config.js 可以配置router, 方法extendRoutes（router, resolve）,添加方式push到router，写法与vue-router一样，（是不是支持props传递动态参数没有试一下）
* 路由导航<router-link><nuxt-link>用法一样
* 编程式导航用法一样
* 路由嵌套 <nuxt-child>
* nuxt定制模板
```js
  <!DOCTYPE html>
  <html {{ HTML_ATTRS }}>
    <head {{ HEAD_ATTRS }}>
      {{ HEAD }}
    </head>
    <body {{ BODY_ATTRS }}>
      {{ APP }}
    </body>
  </html>
```
* 插件plugins
  * '~/plugins/request.js'
  * 能获取到context
  * 如store,router...
* vuex
  * 创建store/index.js
  * 直接导出 state(function), mutations, actions
* 异步数据
  * asyncData方法
  * 组件之前触发，没有vue实例，返回的结果会挂载到vue实例上
  * 有利于seo
  * 可以获取context与plugins相同
* meta
  * head return的结果会挂载到对应的位置
  * 如title,meta
  * meta有个hid，防止子组件覆盖父组件
* 中间价
  * middleware与plugin相似，中间价的挂载到上下文
  * 可以做路由拦截
  * 注入方式组件参数middleware支持字符串/数组
---



#### DEMO地址   https://demo.realworld.io/#/

**要求**

- 首先到 demo 地址注册一个自己的账号, 方便自己代码调测
- 实现功能包括: 注册/登录/退出、文章发表/修改/列表/分页/标签/详情/点赞/取消点赞、个人中心，个人信息更新
- 本作业需要 放在 **github** 个人仓库, 并且**实现自动化部署**
- 作业提交 「仓库代码地址」，在 README.md 中 输出「部署成功的服务器地址」

　　

**说明：一定要完成下面3个练习，包含本模块「服务器部署的大部分问题」**

[**练习一：服务器购买与初始化**](https://gitee.com/lagoufed/fed-e-questions/tree/master/part3/%E7%AC%94%E8%AE%B01-%E6%9C%8D%E5%8A%A1%E5%99%A8%E8%B4%AD%E4%B9%B0%E4%B8%8E%E5%88%9D%E5%A7%8B%E5%8C%96)

- 作业所需服务器, 可以到下面地址购买,  0.1元使用3个月 (需要拉勾学员电话号码注册)

-  https://www.ucloud.cn/site/active/lagou.html

- ( 购买时，要选择 CentOS 系统 )

[**练习二：手动部署项目到服务器**](https://gitee.com/lagoufed/fed-e-questions/tree/master/part3/%E7%AC%94%E8%AE%B02-%E6%89%8B%E5%8A%A8%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E7%BB%83%E4%B9%A0)

[**练习三：自动化部署项目到服务器**](https://gitee.com/lagoufed/fed-e-questions/tree/master/part3/%E7%AC%94%E8%AE%B03-%E8%87%AA%E5%8A%A8%E5%8C%96%E9%83%A8%E7%BD%B2%E9%A1%B9%E7%9B%AE%E5%88%B0%E6%9C%8D%E5%8A%A1%E5%99%A8)









　