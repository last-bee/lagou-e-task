## Vue.js 源码剖析-响应式原理、虚拟 DOM、模板编译和组件化

### 简答题

#### 1、请简述 Vue 首次渲染的过程。

#### 1. 首先对Vue进行初始化，初始化Vue构造函数的原型与静态成员
  *  initMixin(Vue) （注册 vm 的 _init() 方法，初始化 vm）
  *  stateMixin(Vue) （注册 vm 的 $data/$props/$set/$delete/$watch）
  *  eventsMixin(Vue);（初始化事件相关方法，$on/$once/$off/$emit）
  *  lifecycleMixin(Vue);（初始化生命周期相关的混入方法， _update/$forceUpdate/$destroy）
  * renderMixin(Vue) （混入 render $nextTick/_render）
  
#### 2. 实例化Vue，并调用this._init方法（在initMixin声明Vue原型对象上）
* 初始化this._init()
* initLifecycle(vm) /（vm 的生命周期相关变量初始化，$children/$parent/$root/$refs）
* initEvents(vm)（vm 的事件监听初始化, 父组件绑定在当前组件上的事件）
* initRender(vm)（ vm 的编译render初始化，$slots/$scopedSlots/_c/$createElement/$attrs/$listeners）
* callHook(vm, 'beforeCreate') （beforeCreate 生命钩子的回调）
* initInjections(vm)（把 inject 的成员注入到 vm 上， resolve injections before data/props） 
* initState(vm)（初始化 vm 的 _props/methods/_data/computed/watch）   
*  initProvide(vm)（初始化 provide， resolve provide after data/props）
* callHook(vm, 'created')（created 生命钩子的回调）
* vm.$mount()（如果存在vm.$options.el）    
#### 3.vm.$mount() (web/entry-runtime-with-compiler.js  public mount method方法)
* 在web-full-dev版本，web/entry-runtime-with-compiler.js作为入口初始化在Vue原型连上
* $mount的主要作用是按照传入的(模板/el)编译成render函数(调用compileToFunctions方法，返回{ render, staticRenderFn }),储存在options.render中
* 调用 mount 方法，渲染 DOM

#### 4.vm.$mount() (src/plateforms/web/runtime/index.js)
* 重新获取el，运行时版本不会调用第一个mount方法，返回mountComponent方法
* 触发生命周期beforeMount
* 如果是开发环境，判断启动性能检测，性能检测代码
* 定义updateComponents没有执行，里面是调用vm._update(vm._render())
* 创建Watcher实例, 把updateComponents传入，通过Watcher的get方法执行updateComponents
* 触发callHook(vm, 'mounted')生命周期
* 挂载之后return vm
#### 2、请简述 Vue 响应式原理。
#### 1. 首先对Vue进行初始化，初始化Vue构造函数的原型与静态成员
  *  initMixin(Vue) （注册 vm 的 _init() 方法，初始化 vm）
  *  stateMixin(Vue) （注册 vm 的 $data/$props/$set/$delete/$watch）
  *  eventsMixin(Vue);（初始化事件相关方法，$on/$once/$off/$emit）
  *  lifecycleMixin(Vue);（初始化生命周期相关的混入方法， _update/$forceUpdate/$destroy）
  * renderMixin(Vue) （混入 render $nextTick/_render）
#### 2. 初始化_init中，会调用initState()
* 在init.js中调用initMixin方法　
```js
export function initMixin (Vue: Class<Component>) {
  // 给 Vue 实例增加 _init() 方法
  // 合并 options / 初始化操作
  Vue.prototype._init = function (options?: Object) {
    const vm: Component = this
    // a uid
    vm._uid = uid++

    let startTag, endTag
    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      startTag = `vue-perf-start:${vm._uid}`
      endTag = `vue-perf-end:${vm._uid}`
      mark(startTag)
    }

    // a flag to avoid this being observed
    // 如果是 Vue 实例不需要被 observe
    vm._isVue = true
    // merge options
    // 合并 options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options)
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      )
    }
    /* istanbul ignore else */
    if (process.env.NODE_ENV !== 'production') {
      initProxy(vm)
    } else {
      vm._renderProxy = vm
    }
    // expose real self
    vm._self = vm
    // vm 的生命周期相关变量初始化
    // $children/$parent/$root/$refs
    initLifecycle(vm)
    // vm 的事件监听初始化, 父组件绑定在当前组件上的事件
    initEvents(vm)
    // vm 的编译render初始化
    // $slots/$scopedSlots/_c/$createElement/$attrs/$listeners
    initRender(vm)
    // beforeCreate 生命钩子的回调
    callHook(vm, 'beforeCreate')
    // 把 inject 的成员注入到 vm 上
    initInjections(vm) // resolve injections before data/props
    // 初始化 vm 的 _props/methods/_data/computed/watch
    initState(vm)
    // 初始化 provide
    initProvide(vm) // resolve provide after data/props
    // created 生命钩子的回调
    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }
    // 调用 $mount() 挂载
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
  }
}
```
* 在`initMixin`方法中调用initState(vm)初始化 vm 的 _props/methods/_data/computed/watch
* 在`state.js中`有`initState`方法，如果vm.$option.data存在则调用`initData`方法，不存在则调用`observe`方法
```js
export function initState (vm: Component) {
  vm._watchers = []
  const opts = vm.$options
  if (opts.props) initProps(vm, opts.props)
  if (opts.methods) initMethods(vm, opts.methods)
  if (opts.data) {
    initData(vm)
  } else {
    observe(vm._data = {}, true /* asRootData */)
  } 
  if (opts.computed) initComputed(vm, opts.computed)
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch)
  }
}
```
* 判断 data 上的成员是否和  props/methods 重名
* 调用`observe`(data, true /* asRootData */)方法
* `observe`是响应式的入口, 在observe(value)中，首先判断传入的参数value是否是对象，
* 如果不是对象直接返回。
* 再判断value对象是否有`__ob__`这个属性，如果有说明做过了响应式处理，则直接返回
* 如果没有，创建observer(通过是实例化Observer实例创建)对象，并且返回`observer`对象。
* `class` Observer 初始化Dep，赋值vmCount，挂载　def(value, '__ob__', this) （enumerable为false，无法被枚举）
* 判断如果`value`是数组是否支持`__proto__`属性，把数组的每个对象创建一个`observer`实例
* `protoAugment`与`copyAugment`就是拦截数组的几个特殊的方法，`push`,`pop`,`shift`,`unshift`,`splice`,`sort`,`reverse`.(可以修改原数组的操作)
* 如果是对象怎调用`this.walk`方法
* `walk方法中`遍历调用`defineReactive`
* `defineReactive`会给每个属性创建`dep`对象，通过dep去收集依赖，如果configurable为false则不做处理
* 判断是否递归观察子对象，并将子对象属性都转换成 getter/setter，返回子观察对象
* 如果子观察目标存在，建立子对象的依赖关系，如果属性是数组，则特殊处理收集数组对象依赖
* 返回属性值value
* `reactiveSetter`方法，是当响应式数据发生改变的时候出发的
* 主要是响应式数据改变出发set方法，进行派发更新的过程
* 如果新值是对象，观察子对象并返回 子的 observer 对象
* 调用dep.notify()派发通知
* 收集依赖的时候，在watcher对象中的get方法会调用pushTarget，记录Dep.target，在`mountComponent`中调用实例化Watch调用get方法，会触发defineReactive的getter中收集依赖，把属性对应的 watcher 对象添加到dep的subs数组中，给childOb收集依赖，目的是子对象添加和删除成员时发送通知。
* 在数据变化时候，会调用dep.notify方法，调用watcher实例的update方法，判断lazy，sync，调用queueWatcher或者run方法
* 如果这个watcher对象没有的话添加到queue队列中，并调用flushScheduleQueue()，flushScheduleQueue()触发beforeUpdate钩子函数调用watcher.run()：run()->(get/getter)-> updateComponent() -> render()
* 然后清空上一次的依赖
* 触发actived的钩子函数
* 触发updated钩子函数
#### 3、请简述虚拟 DOM 中 Key 的作用和好处。
#### `key`的作用
* 在diff算法中，判断新旧VNode节点的标识
* 如果key不存在，oldVnode与newVNode根据sameVNode方法判断是否为同一个节点
* sameVNode根据key与tag相同，如果key值不存在，在v-for遍历的情况下，会增加dom操作
* 如果没有key的话，在插入数据或删除数据的时候，那么在diff算法的时候，tag相同被认为是相同的元素（其实不是），会进行dom操作
* 如果key值存在，虚拟dom就会根据独特的key值，这样不会渲染错误
　

　

　

#### 4、请简述 Vue 中模板编译的过程。

* entry-runtime-with-compiler.js中保留 Vue 实例的 $mount方法, 重新浏览器平台$mount方法
* 如果options.render不存在，判断是否有template，如果template不存在，获取el的getOuterHTML(el)赋值给template
* 调用createCompiler(baseOptions)的柯里化函数，返回compile，compileToFunctions
* 调用compileToFunctions方法，把template当成参数传入
* createCompilerCreator传入baseCompile返回ast，render（渲染函数），staticRenderFns（静态渲染函数，生成静态 VNode 树）
* parse函数将模板字符串的模板编译转换成 AST 抽象语法树
* optimize优化抽象语法树 标记AST tree树种的静态节点
* generate把 AST 抽象语法树转换成字符串的js代码 检测到静态节点、设置为静态、不需要在每次重新渲染时重新生成节点
* render函数 通过 createFunction 函数 转换为 一个可以执行的函数（new Function）
* 最后render和 staticRenderFns初始化完毕， 挂载到vue实例的options对应的属性中
　

　