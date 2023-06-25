const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const assignmentFeedBackRoutes = require('./assignment.feedback.routes');

const assignmentFeedBackRoute = express.Router();
assignmentFeedBackRoute.use(assignmentFeedBackRoutes);
assignmentFeedBackRoute.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = assignmentFeedBackRoute;
