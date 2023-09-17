const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { userControllers } = require('../../controllers');

const userInfoRoutes = express.Router();

userInfoRoutes.get('/user-info', authentication, userControllers.fetchUserInfo);
userInfoRoutes.put('/user-info', authentication, userControllers.updateUserInfo);

module.exports = {
  userInfoRoutes,
};
