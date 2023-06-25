const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const chapterRoute = require('./chapter.routes');

const chapterRoutes = express.Router();

chapterRoutes.use(chapterRoute);

chapterRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = chapterRoutes;
