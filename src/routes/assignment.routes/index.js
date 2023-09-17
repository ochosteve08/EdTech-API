const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const assignmentsRoutes = require('./assignment.route');

const assignmentRoutes = express.Router();

assignmentRoutes.use(assignmentsRoutes);

assignmentRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = assignmentRoutes;
