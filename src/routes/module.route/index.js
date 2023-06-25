const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const moduleRoute = require('./module.route');

const moduleRoutes = express.Router();

moduleRoutes.use(moduleRoute);

moduleRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = moduleRoutes;
