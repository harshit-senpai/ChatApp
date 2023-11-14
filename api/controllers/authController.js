const jwt = require('jsonwebtoken');
const User = require('./../models/userModel');
const catchAsync = require('./../utils/catchAsync');

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  res.cookie('jwt', token, cookieOptions);

  res.status(statusCode).json({
    status: 'Success',
    id: user._id
  });
};

exports.register = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  createSendToken(newUser, 201, res);
});
