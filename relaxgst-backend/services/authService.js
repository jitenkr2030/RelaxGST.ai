const User = require('../models/User');
const { generateToken } = require('../config/jwt');

const registerUser = async (userData) => {
  const { name, email, password } = userData;
  const user = await User.create({ name, email, password });

  return {
    _id: user.id,
    name: user.name,
    email: user.email,
    token: generateToken(user.id),
  };
};

const loginUser = async (userData) => {
  const { email, password } = userData;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    return {
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user.id),
    };
  } else {
    throw new Error('Invalid email or password');
  }
};

module.exports = { registerUser, loginUser };
