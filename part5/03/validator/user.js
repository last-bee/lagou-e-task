const { body } = require('express-validator')
const validate = require('../middleware/validate')
const { User } = require('../model')
const md5 = require('../util/md5')


exports.register = validate([
  body('name')
    .notEmpty().withMessage('用户名不能为空')
    .custom(async name => {
      const user = await User.findOne({ name })
      console.log(user)
      if(user) {
        return Promise.reject('用户名已存在')
      }
    }),
  body('password').notEmpty().withMessage('密码不能为空'),
  body('email')
    .notEmpty().withMessage('邮箱不能为空')
    .isEmail().withMessage('邮箱格式不正确')
    .custom(async email => {
      const user = await User.findOne({ email })
      if(user) {
        return Promise.reject('邮箱已存在')
      }
    })
])


exports.login = [
  validate([
    body('email').notEmpty().withMessage('邮箱不能为空'),
    body('password').notEmpty().withMessage('密码不能为空')
  ]),
  validate([
    body('email').custom(async (email, { req }) => {
      const user = await User.findOne({ email }).select(['name', 'email', 'password', 'avatar'])
      if(!user) {
        return Promise.reject('用户不存在')
      }
      req.user = user
    })
  ]),
  validate([
    body('password').custom(async (password, { req }) => {
      if(md5(password) !== req.user.password) {
        return Promise.reject('密码错误')
      }
    })
  ])  
]