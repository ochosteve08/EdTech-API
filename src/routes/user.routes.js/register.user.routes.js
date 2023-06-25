const express = require('express');
const { userControllers } = require('../../controllers');

const userSignUpRoutes = express.Router();

userSignUpRoutes.post('/register', userControllers.registerUser);

module.exports = {
  userSignUpRoutes,
};
