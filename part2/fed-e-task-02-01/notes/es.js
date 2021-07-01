// const arr = [100, 200, 300]

// for(const item of arr) {
//   console.log(item)
// }

// const set = new Set([100, 200 ,300])
// for(const item of set) {
//   console.log(item)
// }

// const map = new Map([['foo', 100], ['foo1', 200]])
// for(const item of map) {
//   console.log(item)
// }
// // 不能遍历对象
// // const obj = { a: 1, b: 2 }
// // for(const item of obj) {
// //   console.log(item)
// // }


// function * foo() {
//   console.log('1')
//   yield 100
//   console.log('2')
//   yield 200
//   console.log('3')
//   yield 300
//   console.log('4')
//   return 400
// }

// const result = foo()
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())
// console.log(result.next())

// Generator

// function * createIdMaker() {
//   let id = 1
//   while (true) {
//     yield id++
//   }
// }
// var idMarkr = createIdMaker()
// console.log(idMarkr.next())
// console.log(idMarkr.next())
// console.log(idMarkr.next())

// const arr = [1, 3, 4,5,6]
// console.log(arr.includes(3))

// const str = '12345678'
// console.log(str.includes('5'))

// var obj = {
//   foo: 123,
//   bar: 344
// }

// console.log(Object.values(obj))
// console.log(Object.entries(obj))

const p1 = {
  firstName: 'Lei',
  lastName: 'Wang',
  get fullName() {
    return this.firstName + ' ' + this.lastName
  }
}

// const p2 = Object.assign({}, p1)
// p2.firstName = 'ZCE'
// console.log(p2)

const descript = Object.getOwnPropertyDescriptors(p1)
console.log(descript)
const p2 = Object.defineProperties({}, descript)
p2.firstName = 'zce'
console.log(p2)
const arr = [1, 3, 4, 5,]
console.log(arr.length)