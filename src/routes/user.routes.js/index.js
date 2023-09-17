const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoute = require('./user.routes');

const userRoutes = express.Router();

userRoutes.use(userRoute);
userRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = userRoutes;
