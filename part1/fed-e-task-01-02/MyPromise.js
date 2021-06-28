const { reject } = require("lodash")

/**
 * 1. Promise 是个类，在执行的时候 需要传递一个执行去进去，执行器会立即执行
 * 2. Promise有三个状态  pending  fulfilled rejected
 * 3. resolve和reject函数是用来更改状态的
 * 4. then 方法内部事件判断状态是否成功 成功或失败调用对应的回调
 */
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {
  constructor(executor) {
    // 执行器发生错误，捕获传给reject
    try {
      executor(this.resolve, this.reject)
    }catch(err) {
      this.reject(err)
    }
    // 执行器直接执行
  }
  status = PENDING
  value = void 0
  reason = void 0
  successCallBackList = []
  failCallBackList = []
  resolve = (value) => {
    // 等待状态才可以修改
    if(this.status !== PENDING) return
    this.status = FULFILLED
    this.value = value
    // for(var i  = 0, l = this.successCallBackList.length; i < l; i ++) {
    //   this.successCallBackList[i] && this.successCallBackList[i](this.value)
    // }
    // this.successCallBackList = []
    while(this.successCallBackList.length) {
      this.successCallBackList.shift()() // then方法的回调异步没必要穿value了
    }
  }
  reject = (reason) => {
    // 等待状态才可以修改
    if(this.status !== PENDING) return
    this.status = REJECTED
    this.reason = reason
    // for(var i  = 0, l = this.failCallBackList.length; i < l; i ++) {
    //   this.failCallBackList[i] && this.failCallBackList[i](this.reason)
    // }
    // this.failCallBackList = []
    while(this.failCallBackList.length) {
      this.failCallBackList.shift()() // then方法的回调异步没必要穿reason了
    }
  }
  then(successCallBack, failCallBack) {
    successCallBack = successCallBack? successCallBack : (value) => value
    failCallBack = failCallBack? failCallBack : (reason) => { throw reason }
    let promise1 = new MyPromise((resolve, reject) => {
      if(this.status === FULFILLED) {
        // promise1 不能获取到，执行器首先执行，并不能获取到pormise1，添加个settimeout宏任务，取保能获取到promise1
        setTimeout(() => {
          // 捕获到成功回调的错误，然后传给下一个then方法的reject
          try {
            let x = successCallBack && successCallBack(this.value)
            console.log(x)
            resolvePromise(promise1, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
          
        }, 0);
      } else if(this.status === REJECTED) {
        setTimeout(() => {
          // 捕获到成功回调的错误，然后传给下一个then方法的reject
          try {
            let x = failCallBack && failCallBack(this.reason)
            resolvePromise(promise1, x, resolve, reject)
          } catch (error) {
            reject(error)
          }
          
        }, 0);
        
      } else {
        this.successCallBackList.push(() => {
          setTimeout(() => {
            // 捕获到成功回调的错误，然后传给下一个then方法的reject
            try {
              let x = successCallBack && successCallBack(this.value)
              console.log(x)
              resolvePromise(promise1, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
            
          }, 0);
        })
        this.failCallBackList.push((reason) => {
          setTimeout(() => {
            // 捕获到成功回调的错误，然后传给下一个then方法的reject
            try {
              let x = failCallBack && failCallBack(this.reason)
              resolvePromise(promise1, x, resolve, reject)
            } catch (error) {
              reject(error)
            }
            
          }, 0);
        })
      }
    })
    return promise1
  }

  /* 实现 catch 方法
   *    当 promise 的 then没有捕获失败情况的时候, 会将错误传递给catch */
  catch(failCallback) {
    return this.then(undefined, failCallback);
  }
  /* 实现 promise all 方法
   *    定义成静态方法是因为 all 可以用类名直接调用: MyPromise.all
   *    普通方法用实例调用: 如then
   *    接收方法为普通值 或者promise
   *    调用成功后返回 promise 对象
   *    all方法可以调用then接收，需要返回promise实例
   *    全部成功返回result，任何失败的话调用reject
   */
  static all(array) {
    var result = []
    var index = 0
    return new MyPromise((resolve, reject) => {
      function addDate(i, data) {
        result[i] = data
        index ++
        if(index === array.length) {
          resolve(result)
        }
      }
      for(var i = 0; i< array.length; i++) {
        let current = array[i]
        if(current instanceof MyPromise) {
          current.then((value) => {
            addDate(i, value)
          }, reason => reject(reason))
        } else {
          addDate(i, current)
        }
      }
    })
  }
  /**
   * promise.reslove 方法的实现
   * 返回promise实例
   * 如果是promise直接返回
   * 如果不是的话，返回promise实例，把value传递过去
   */
  static resolve(value) {
    if (value instanceof MyPromise) return value;
    return new MyPromise((resolve) => {
      resolve(value);
    });
  }
  /* 实现 finally 方法
   *    接收一个回调函数为参数，无论 Promise 是否成功, 都会执行
   *    返回一个 then 方法, 可以拿到当前 promise 对象的结果
   * */
  finally(callback) {
    return this.then(
      value => MyPromise.resolve(callback()).then(() => value),
      reason => MyPromise.resolve(callback()).then(() => { throw reason }
    )
    );
  }
  /**
   * race 方法
   */
  static race(array) {
    return new MyPromise((resolve, reject) => {
      for(var i = 0; i< array.length; i++) {
        let current = array[i]
        if(current instanceof MyPromise) {
          current.then(resolve, reject)
        } else {
          resolve(current)
          return
        }
      }
    })
  }
}

function resolvePromise( promise1, x, resolve, reject) {
  if(promise1 === x) {
    return resolve(new TypeError('Chaning cycle detected for promise #<Promise>'))
  }
  if(x instanceof MyPromise) {
    x.then(resolve, reject)
  } else {
    resolve(x)
  }
}

// var p = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('----成功数据----')
//     // reject('---失败数据---')
//   }, 2000);
//   // reject('失败')
// })

// p.then((value) => { return value }).then((data) => {
//   console.log(data)
// })

// p.then(value => {
//   console.log(value)
// }, reason => {
//   console.log(reason)
// })
// var p1 = new MyPromise((resolve) => {
//   resolve(1)
// })
// var p2 = new MyPromise((resolve) => {
//   resolve(2)
// })
// var p3 = new MyPromise((resolve) => {
//   resolve(3)
// })

// Promise.all([p1, p2, 'a', p3, 'b']).then(list => {
//   console.log(list)
//   return list
// }).finally(() => {
//   console.log('----finally-----')
// })
module.exports = MyPromise


// var promise = new Promise((resolve, reject) => {
//   resolve()
// })

// var p1 = new MyPromise((resolve, reject) => {
//   reject('error1')
// })


// var p2 = new MyPromise((resolve, reject) => {
//   reject('error2')
// })


// var p3 = new MyPromise((resolve, reject) => {
//   reject('error3')
// })

// MyPromise.race([p1, p2, p3]).then(data => {
//   console.log(data)
// }).catch((err) => { console.log(err) })