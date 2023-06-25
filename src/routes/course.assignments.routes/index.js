const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const courseAssignmentsRoutes = require('./course.assignments.routes');

const courseAssignmentRoutes = express.Router();

courseAssignmentRoutes.use(courseAssignmentsRoutes);

courseAssignmentRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = courseAssignmentRoutes;
