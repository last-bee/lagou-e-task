// const person = {
//   name: 'tom',
//   age: 20
// }

// const personProxy = new Proxy(person, {
//   get(target, property) {
//     return property in target? target[property]: 'default'
//   },
//   set(target, property, value) {
//     target[property] = value
//     return true
//   }
// })

// console.log(personProxy.age)

// 只能监听读写
// proxy能监听其他操作，比如delete，in
// proxy能监听数组，Object.defineProperty只能通过重写数组的操作方法，通过自定义方法来劫持数组操作方法
// const personDefineProperty = {
//   name: 'Tom'
// }

// Object.defineProperty(personDefineProperty, 'age', {
//   get() {
//     console.log("age 被访问");
//     return personDefineProperty._age
//   },
//   set(_age) {
//     console.log(`age 被设置"为${_age}`);
//     personDefineProperty._age = _age
//   }
// })

// personDefineProperty.age = 18
// personDefineProperty.name = 'Tom'

// const list = []

// const listProxy = new Proxy(list, {
//   set(target, property, value) {
//     console.log(`property is ${ property }`)
//     target[property] = value 
//     return true
//   }
// })
// listProxy.push(1)

function * foo() {
  console.log('ace')
  return 100
}

const result = foo()
console.log(result)