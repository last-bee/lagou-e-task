// Promise 方式的 AJAX

// function ajax (url) {
//   return new Promise(function (resolve, reject) {
//     var xhr = new XMLHttpRequest()
//     xhr.open('GET', url)
//     xhr.responseType = 'json'
//     xhr.onload = function () {
//       if (this.status === 200) {
//         resolve(this.response)
//       } else {
//         reject(new Error(this.statusText))
//       }
//     }
//     xhr.send()
//   })
// }

// ajax('/api/foo.json').then(function (res) {
//   console.log(res)
// }, function (error) {
//   console.log(error)
// })

// // 静态方法
// Promise.resolve(1).then((data) => { console.log(data) })
// Promise.reject(new Error('error msg')).catch((err) => { console.log(err) })

// Promise.all([
//   ajax('/api/foo.json'),
//   ajax('/api/post.json'),
//   ajax('/api/error.json'),
// ]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// Promise.race([])// 有一个返回则结束

// promise 是异步调用 微任务
// setTimeout 宏任务


// new Promise((resolve, reject) => {
//   console.log('11111', this)
//   resolve(111)
//   console.log('22222')
// }).then(res => {
//   console.log(res)
// })
// console.log('33333333')

// class MyPromise {
//   map = () => {
//     console.log(this)
//   }
// }

// var pro = new MyPromise()
// pro.map()


var p1 = new Promise((resolve, reject) => {
  reject('error1')
})


var p2 = new Promise((resolve, reject) => {
  reject('error2')
})


var p3 = new Promise((resolve, reject) => {
  reject('error3')
})

Promise.race([p1, p2, p3]).then(data => {
  console.log(data)
}).catch((err) => { console.log(err) })