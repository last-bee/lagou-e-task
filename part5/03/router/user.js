const express = require('express')
const userValidator = require('../validator/user')
const userCtrl = require('../controller/user')
const { User } = require('../model')
const router = express.Router()

router.post('/register', userValidator.register, userCtrl.register)

router.post('/login', userValidator.login, userCtrl.login)


router.get('/getUserByName/:name', userCtrl.getUserByName)

module.exports = router



