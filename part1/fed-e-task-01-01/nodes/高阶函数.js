// 把函数当成一个函数的参数
// 把函数作为一个函数的返回结果

// forEach
function forEach(array, fn) {
  for(var i = 0; i < array.length; i ++) {
    fn(array[i])
  }
}
// test
var arr = [1, 2, 3, 4, 5]
forEach(arr, (item) => { console.log(item) })

// filter
function filter(array, fn) {
  var arr = []
  for(var i = 0; i < array.length; i ++) {
    if(fn(array[i])) {
      arr.push(array[i])
    }
  }
  return arr
}

console.log(filter(arr, (item) => { return item > 3 }))

// some
function some(array, fn) {
  var result = false
  for(var i = 0; i < array.length; i++) {
    if(fn(array[i])) {
      return true
    }
  }
  return result
}

console.log(some(arr, (item) => { return item > 3 }))
console.log(some(arr, (item) => { return item > 5 }))


function every (array, fn) {
  var result = true
  for(var i = 0; i < array.length; i++) {
    if(!fn(array[i])) {
      return false
    }
  }
  return result
}

console.log(every(arr, (item) => item > 1))
console.log(every(arr, (item) => item >= 1))


// once 函数
function once(fn) {
  let done = false
  return function() {
    if(done) {
      return
    } else {
      done = true
      fn.apply(this, arguments)
    }
  }
}

let noceFn = once(function() { console.log('----once function----') })
noceFn()
noceFn()// 不执行


// map

function map(array, fn) {
  var result = []
  forEach(array, (item) => {
    result.push(fn(item))
  })
  console.log(result)
  return result
}

console.log(map(arr, (item) => { return item * item }))

// 闭包
function makePower(power) {
  return function(number) {
    return Math.pow(number, power)
  }
}

let power2 = makePower(2)(3)
console.log(power2)

let power3 = makePower(3)

let number1 = power3(2)
let number2 = power3(3)
console.log(number1, number2)