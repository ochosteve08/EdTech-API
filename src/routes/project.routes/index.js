const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const projectRoutes = require('./project.routes');

const projectsRoutes = express.Router();

projectsRoutes.use(projectRoutes);

projectsRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = projectsRoutes;
