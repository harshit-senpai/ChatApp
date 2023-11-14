const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'please provide your username'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    minlength: 8,
    select: false,
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  this.password = await bcrypt.hash(this.password, 12);

  next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
