const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
  },
  birth: {
    type: Date,
  },
  gender: {
    type: String,
  },
  email: {
    type: String,
  },
  // password: {
  //   type: String,
  // },
  phone: {
    type: String,
  },
  zonecode: {
    type: String,
  },
  address: {
    type: String,
  },
  addressDetail: {
    type: String,
  },
  join_date: {
    type: Date,
  }
});

const User = mongoose.model('user', userSchema);

module.exports = { User }