const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/mongoose_data')

const db = mongoose.connection

// 当连接失败的时候
db.on('error', err => {
  console.log('MongoDB 数据库连接失败', err)
})

// 当连接成功的时候
db.once('open', function () {
  console.log('MongoDB 数据库连接成功')
})

// 组织导出模型类
module.exports = {
  User: mongoose.model('User', require('./user'))
}