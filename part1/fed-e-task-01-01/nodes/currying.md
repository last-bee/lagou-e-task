# 柯里化
> 柯里化（Currying）: 是把一个接收多个参数的函数变换成接收一个单一参数(最初函数的第一个参数)的函数，并且返回接收余下的参数且返回结果的新函数。

``` js
  // 普通函数
  function add(a,b,c) {
    return a + b + c
  }
  console.log(add(1,2,3))
```

```js 
  // 柯里化
  function add(a){
      return function(b) {
          return function(c) {
              return a + b + c
          }
      }
  }
  console.log(add(1)(2)(3))
```

## lodash的curry方法
``` js
  const _ = require('lodash')
  const curried = _.curry(getSum)
  console.log(curried(1)(2)(3))
  console.log(curried(1)(2, 3))
```

## 柯里化的案例
> 柯里化可以使函数式编程更好的利用，把每个功能拆分很小，然后自己组装。
```js
  const match = _.curry(function(reg, str) { return str.match(reg) })
  const haveSpace = match(/\s+/g)

  console.log(haveSpace('hello world'))
  const filter = _.curry(function(func, array) {
    return array.filter(func)
  })
  const findSpace = filter(haveSpace)

  console.log(findSpace(['a b', 'c', 'd-d', 'e eee']))
```

## 模拟lodash的curry方法
```js
  // 模拟实现lodash的curry方法
  function curry(func) {
    return function curriedFn(...args) {
      if(args.length < func.length) {
        return function() {
          return curriedFn(...args.concat(Array.from(arguments)))
        }
      }
      return func(...args)
    }
  }
```
## 函数柯里化总结
* 柯里化可以让我们给一个函数传递较小的参数得到一个已经记住的某些固定参数的新函数
* 这是一种对函数参数的**缓存**
* 让函数变得更加邻国，让函数的颗粒度更小
* 可以吧多远函数转换成一元函数，可以组合使用函数产生强大的功能