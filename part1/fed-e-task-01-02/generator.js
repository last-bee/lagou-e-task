function * foo() {
  console.log('start')
  try{
    const res = yield 'foo'
    console.log(res)
  }catch(err) {
    console.log('err', err)
  }
  
}

const generator = foo()
console.log(generator)
const result = generator.next()

console.log(result)

// generator.next('bar')

generator.throw(new Error('error'))