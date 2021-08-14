## 简答题

（请直接在本文件中作答）

#### 1、Vue 3.0 性能提升主要是通过哪几方面体现的？

　##### 1. 响应式系统升级
* vue3使用proxy重写响应式系统
* vue2使用Object.defineProperty实现
* proxy可以监听数组，属性的动态变化，性能更好

##### 2. 编译过程的优化
* vue2使用静态根节点优化diff过程
* vue3使用标记提升静节点，diff只需要更新动态节点
* 使用缓存处理函数

##### 源码体积优化
* 删除一些不常用API（inline-template/filter）
* 使用tree-shaking

　

　

#### 2、Vue 3.0 所采用的 Composition Api 与 Vue 2.x使用的Options Api 有什么区别？
* options api
  *  data methods props mounted都在不同的区域
  * 当开发复杂组件上下横跳，开发不方便
* composition api
  * 基于函数api，可以把数据方法进行更好更灵活的封装
  * 相同代码不需要拆分，可以更好地提取和重用
* 好比一个基于函数，一个基于类

　

　

　

#### 3、Proxy 相对于 Object.defineProperty 有哪些优点？

* proxy优点
  * 可以监听对象的动态属性的变化，比如增加删除
  * 可以对数组进行监听，可以监听length与索引
  * Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
  * proxy是新标准，浏览器的性能更强
　

　

#### 4、Vue 3.0 在编译方面有哪些优化？

* vue3标记提前所有静态节点，diff的过程只会比对动态节点的内容
* Fragments 片段，模板中可以直接放文本内容或同级标签(vscode中要升级 vetur 插件)
* 使用cache处理函数事件，减少了不必要的更新操作

　

　

#### 5、Vue.js 3.0 响应式系统的实现原理？

* 创建reactive函数
* 如果对象__v_isReadonly为true直接返回
* 返回一个柯里化函数createReactiveObject
* createReactiveObject函数如果target不是一个函数，开发模式警告，并返回target
* 若果target的__v_raw存在并且非readonly __v_isReactive为false返回target
* 判断target的类型getTargetType函数如果为0，返回target
* 实例化Proxy，把target，proxy保存到proxyMap，返回proxy
* new Proxy的参数collectionHandlers（mutableCollectionHandlers只有get，他是只读的）与baseHandlers（mutableHandlers）
* mutableHandlers有吃力proxy实例的get,set,deleteProperty,has,ownKeys
* 以get为例是收集依赖的过程调用createGetter，两个参数是否只读，是否为浅数据
* get方法里面会触发track收集依赖使用effect收集依赖，如果数据是对象会调用reactive
* set方法是createSetter得到的，trigger方法派发副作用函数
　

　