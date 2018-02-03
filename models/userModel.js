const mongoose = require('mongoose')

const Schema = mongoose.Schema
const uniqueValidator = require('mongoose-unique-validator');


const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  email: {
    type: String,
    validate: {
      validator: function (email) {
        let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
        return emailReg.test(email)
      },
      message: '{VALUE} is not a valid email'
    },
    required: [true, 'Email required']
  },
  firstName: String,
  lastName: String,
  age: Number,
  address: Number,
  phoneNumber: Number,
  createdAt: {
    type: Date,
    default: Date.now
  },
  updateAt: Date
})


userSchema.plugin(uniqueValidator); // add validation to username


const User = mongoose.model('userDentist', userSchema)

module.exports = User;
