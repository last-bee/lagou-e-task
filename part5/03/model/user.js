const mongoose = require('mongoose')
const baseModel = require('./base-model')
const md5 = require('../util/md5')

const userSchema = new mongoose.Schema({
  ...baseModel,
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
    set: value => md5(value),
    select: false
  },
  avatar: {
    type: String,
    default: null
  }
})

module.exports = userSchema
