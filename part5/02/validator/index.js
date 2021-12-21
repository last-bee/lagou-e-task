const { body } = require('express-validator')
const validate = require('../middleware/validate')


module.exports = validate([
  body('owner').notEmpty().withMessage('用户不能为空'),
  body('type').notEmpty().withMessage('漂流瓶类型不能为空').bail().custom(async type => {
    if(!['male', 'female'].includes(type)) {
      return Promise.reject('漂流瓶类型不合法')
    }
  }),
  body('content').notEmpty().withMessage('漂流瓶内容不能为空'),
])

