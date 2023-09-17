const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const CategoryRoute = require('./category.route');

const categoryRoutes = express.Router();

categoryRoutes.use(CategoryRoute);
categoryRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = categoryRoutes;
