const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  bio: {
    type: String,
    required: false,
    default: ''
  },
  location: {
    type: String,
    required: false,
    default: ''
  },
  active: {
    type: Boolean,
    default: true
  },
  joined: {
    type: Date,
    default: Date.now // // `Date.now()` returns the current unix timestamp as a number
  }
});

module.exports = mongoose.model('User', UserSchema);
