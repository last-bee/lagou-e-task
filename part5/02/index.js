const ioredis = require('ioredis')

const redis = new ioredis({
  port: 6379,
  host: 'localhost'
})

redis.set('foo', 'bar', (err, ret) => {
  if(err) {
    return console.log(err)
  }
  console.log('写入成功')
})


redis.on('error', err => {
  console.log(err)
});