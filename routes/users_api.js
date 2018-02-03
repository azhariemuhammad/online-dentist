const express = require('express')
const router = express.Router()

const {
  createUser,
  getAllUsers,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove
} = require('../controllers/user_ctrl')

router.post('/users', createUser)

router.get('/users', getAllUsers)

router.get('/users/:id', findById)

router.put('/users/:id', findByIdAndUpdate)

router.delete('/users/:id', findByIdAndRemove)


module.exports = router