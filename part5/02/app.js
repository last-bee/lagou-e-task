const express = require('express')
const { v4: uuid } = require('uuid')
const validator = require('./validator/index')
const app = express()
app.use(express.json())


const ioredis = require('ioredis')

const redis = new ioredis({
  port: 6379,
  host: 'localhost'
})


// redis.set('foo', 'bar', (err, ret) => {
//   if(err) {
//     return console.log(err)
//   }
//   console.log('写入成功')
// })


// redis.on('error', err => {
//   console.log(err)
// });

const typeMap = { // type 类型对应的库
  all: Math.round(Math.random()),
  male: 0,
  female: 1
}

// 获取漂流瓶
app.get('/api/floater', async(req, res, next) => {
  const { user, type } = req.query
  if(!user) {
    return res.status(400).json({
      error: '用户名不能为空'
    })
  }
  await redis.select(typeMap[type || 'all'])
  const bottleId = await redis.randomkey() // 随机返回一个key
  if (!bottleId) {
    return res.status(200).json({
      code: 0,
      message: '漂流瓶被捞完了！'
    })
  }
  const msg = await redis.hgetall(bottleId)
    
  res.status(200).json({
    code: 1,
    msg
  })
  redis.del(bottleId)
})

// 扔一个漂流瓶
app.post('/api/floater',validator, async(req, res, next) => {
  try {
    const body = Object.assign(req.body, { time:  Date.now() }) 
    // 随机漂流瓶id
    const bottleId = uuid()// 生成随机id 作为key， 怎么可以做成递增？
    await redis.select(typeMap[body.type] || 0)// 随机库
    await redis.hmset(bottleId, body)
    await redis.expire(bottleId, 60 * 60 * 24)// 设置过期时间 秒
    res.status(200).json({
      code: 1,
      msg: '您成功扔出一个漂流瓶！'
    })
  } catch (error) {
    next(error)
  }
})

const PORT = 3011
app.listen(PORT, () => {
  console.log(`server is running at ${ PORT }`)
})


