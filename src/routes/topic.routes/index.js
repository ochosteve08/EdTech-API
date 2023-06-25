const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const TopicRoute = require('./topic.route');

const topicRoutes = express.Router();

topicRoutes.use(TopicRoute);
topicRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = topicRoutes;
