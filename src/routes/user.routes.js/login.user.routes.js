const express = require('express');
const { userControllers } = require('../../controllers');

const userLogInRoutes = express.Router();

userLogInRoutes.post('/login', userControllers.userLogin);

module.exports = {
  userLogInRoutes,
};
