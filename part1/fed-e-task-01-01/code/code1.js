/*
  将下面异步代码使用 Promise 的方法改进
  尽量用看上去像同步代码的方式
  setTimeout(function () {
    var a = 'hello'
    setTimeout(function () {
      var b = 'lagou'
      setTimeout(function () {
        var c = 'I ♥ U'
        console.log(a + b +c)
      }, 10)
    }, 10)
  }, 10)
*/

var promise = data => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(data)
  }, 10)
})
promise('hello').then(a => {
  return promise('lagou').then(b => a + b)
}).then((c)=> {
  return promise('I ♥ U').then(d => c + d)
}).then(e => { console.log(e) })
