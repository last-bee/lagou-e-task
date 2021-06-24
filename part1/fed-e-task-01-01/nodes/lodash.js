// 原生js已经有了很多lodash方法，它的优势是啥？

const _ = require('lodash')

const array = ['jack', 'tom', 'lucy', 'kate']

console.log(_.first(array))
console.log(_.last(array))

console.log(_.toUpper(array))

console.log(_.reverse(array))

// lodash的curry方法

function getSum(a, b, c, ...arg) {
  return a + b + c
}

console.log('----length----',getSum.length)
const curried = _.curry(getSum)

console.log(curried(1)(2)(3))
console.log(curried(1)(2, 3))

// 柯里化的案例

// function match(reg, str) {
//   return str.match(reg)
// }

const match = _.curry(function(reg, str) { return str.match(reg) })
const haveSpace = match(/\s+/g)

console.log(haveSpace('hello world'))
const filter = _.curry(function(func, array) {
  return array.filter(func)
})
const findSpace = filter(haveSpace)

console.log(findSpace(['a b', 'c', 'd-d', 'e eee']))

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