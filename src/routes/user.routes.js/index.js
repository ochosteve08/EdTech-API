const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const { userSignUpRoutes } = require('./register.user.routes');
const { userLogInRoutes } = require('./login.user.routes');
const { verifyUserRoutes } = require('./verify.user.routes');
const { userInfoRoutes } = require('./userInfo.routes');

const userRoutes = express.Router();

userRoutes.use(userSignUpRoutes);
userRoutes.use(userLogInRoutes);
userRoutes.use(verifyUserRoutes);
userRoutes.use(userInfoRoutes);
userRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = userRoutes;
