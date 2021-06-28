# 实现Promise的思路
### 一、Promise是一个类 可以使用new方法创建Promise实例
* 参数是一个执行器（executor），执行器会立即执行，执行器有两个回调为resolve与reject
### 二、Promise 有三个状态 pending、fulfilled、rejected；初始状态为 pending
* 状态除了pending不可改变
* fulfilled的状态->resolve
* rejected->reject
### 三、then方法
* then方法做的事就是判断状态, 如果状态是成功, 调用成功的回调, 反之调用失败的方法
* 如果状态为pending，保存回调函数
* then方法可以链式调用，所以会返回一个promise
* 链式调用promise不能获取到，执行器首先执行，并不能获取到pormise，添加个settimeout宏任务，取保能获取到promise
* then的参数可以不传，统一处理回调上一个返回值
### 四、捕获执行异常try catch捕获
* 执行器错误 
* 回调错误，reject与reslove执行期间错误
### 五、all方法
* 定义成静态方法是因为 all 可以用类名直接调用: MyPromise.all
* 普通的方法需要用实例调用: new MyPromise().then
* 接收数组作为参数, 数组可以是
* 普通值(传入时是普通值则返回的结果也是普通值)promise(传入时是promise对象则返回的结果是promise的值) 调用成功后返回 promise 对象
### 六、resolve方法
* 静态方法，原因同上
* 返回promise实例，如果是promise直接返回，不是的话，创建一个promise 并且直接resolve(value)
### 七、finally 方法
* 接收一个回调函数为参数，无论promise是否成功, 都会执行
* 返回一个then方法, 可以拿到当前promise对象的结果
* then执行之后直接callback
### 八、catch 方法
 * 当promise的then没有捕获失败情况的时候, 会将错误传递给 catch
### race 方法
* 定义成静态方法是因为 race 可以用类名直接调用: MyPromise.race
* 接收是个数组
* 遍历数组，如果是promise监听then方法，如果不是，直接调用resolve。
* promise谁先返回，调用resolve方法