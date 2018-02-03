const express = require('express')
const router = express.Router()

const {
  createUser,
  getAllUsers,
  findById
} = require('../controllers/user_ctrl')

router.post('/users', createUser)

router.get('/users', getAllUsers)

router.get('/users/:id', findById)




module.exports = router