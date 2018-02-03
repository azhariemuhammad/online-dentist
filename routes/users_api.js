const express = require('express')
const router = express.Router()

const {
  createUser
} = require('../controllers/user_ctrl')

router.get('/users', createUser)




module.exports = router