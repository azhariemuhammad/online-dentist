const User = require('../models/userModel')

const createUser = (req, res) => {
  User.create({
    username: req.body.username,
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    age: req.body.age
  })
    .then(user => {
      console.log`user create: ${user}`
      res.status(200).json({
        status: 'OK',
        user
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        status: 'BAD',
        err
      })
    })
}

const getAllUsers = (req, res) => {
  User.find()
    .then(user => {
      console.log`get AllUser: ${user}`
      res.status(200).json({
        status: 'OK',
        user
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        status: 'BAD',
        err
      })
    })
}

const findById = (req, res) => {
  User.find({_id: req.params.id})
    .then(user => {
      console.log(user)
      res.status(200).json({
        status: 'OK',
        user
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        status: 'BAD',
        err
      })
    })
}

const findByIdAndUpdate = (req, res) => {
  User.findByIdAndUpdate(
    {
      _id: req.params.id
    },
    {
      username: req.body.username,
      email: req.body.email,
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age
    }, {new: true})
  .then(user => {
    console.log('user: ', user)
    res.status(200).json({
      status: 'OK',
      user
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({
      status: 'BAD',
      err
    })
  })
}

const findByIdAndRemove = (req, res) => {
  User.findByIdAndRemove({_id: req.params.id})
    .then(user => {
      console.log('user: ', user)
      res.status(200).json({
        status: 'OK',
        user
      })
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({
        status: 'BAD',
        err
      })
    })
}

module.exports = {
  createUser,
  getAllUsers,
  findById,
  findByIdAndUpdate,
  findByIdAndRemove
}