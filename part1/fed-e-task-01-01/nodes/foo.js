// 20210623面试题
function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}

var getName = function() {
  console.log(4)
}

function getName() {
  console.log(5)
}

/**
 * 预解析
 */

var getName;

function Foo() {
  getName = function() {
    console.log(1)
  }
  return this
}

// function getName() {
//   console.log(5)
// }

Foo.getName = function() {
  console.log(2)
}

Foo.prototype.getName = function() {
  console.log(3)
}

getName = function() {
  console.log(4)
}

Foo.getName() // 2 --->> 函数也是对象
Foo().getName() // Foo() -> window  window.getName --> 1
getName() // 同上
new Foo.getName() === (new (Foo.getName))() // .的优先级大 ---> 2
new Foo().getName() === (new Foo()).getName() // .的优先级大 前面是函数要先执行 this指向Foo的实例没有getName就指向Foo的原型链---> 3
new new Foo().getName() === new ((new Foo()).getName)() // 根据上面就知道 是Foo原型链的构造函数  结果一样 ---> 3