const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const teacherRoutes = require('./teacher.routes');

const teachersRoutes = express.Router();

teachersRoutes.use(teacherRoutes);
teachersRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = teachersRoutes;
