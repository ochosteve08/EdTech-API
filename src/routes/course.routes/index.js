const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const courseRoutes = require('./course.routes');

const coursesRoutes = express.Router();

coursesRoutes.use(courseRoutes);

coursesRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = coursesRoutes;
