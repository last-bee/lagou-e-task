// 函数组合
// function compose(f, g) {
//   return function(value) {
//     return f(g(value))
//   }
// }


// function reverse(array) {
//   return array.reverse()
// }

// function first(array) {
//   return array[0]
// }

// const last = compose(first, reverse)

// console.log(last([1, 3, 4, 5]))

const _ = require('lodash')
const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const f = _.flowRight(toUpper, first, reverse)

console.log(f(['one', 'two', 'three']))

function compose(...args) {
  return function(value) {
    return args.reverse().reduce(function(acc, fn) { return fn(acc) }, value)
  }
}

const fp = require('lodash/fp')

// const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.first),fp.map(fp.toUpper),fp.split(' '))
const firstLetterToUpper = fp.flowRight(fp.join('. '), fp.map(fp.flowRight(fp.first, fp.toUpper)), fp.split(' '))
console.log(firstLetterToUpper('world wild web'))