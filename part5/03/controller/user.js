const { User } = require('../model')


exports.register = async (req, res, next) => {
  try {
    let user = new User(req.body)
    const data = await user.save()
    console.log(data)
    res.status(200).json({
      user
    })
  } catch(error) {
    res.status(500).json({
      error
    })
  }
}

exports.login = async(req, res, next) => {
  try {
    const user = req.user.toJSON()
    delete user.password
    res.status(200).json({
      user
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}


exports.getUserByName = async(req, res, next) => {
  try {
    const name = req.params.name
    const user = await User.findOne({ name })
    if(!user) {
      return res.status(401).json({
        msg: `用户${name}不存在`
      })
    }
    res.status(200).json({
      user
    })
  } catch (error) {
    res.status(500).json({
      error
    })
  }
}