const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { projectControllers } = require('../../controllers');

const projectRoutes = express.Router();

projectRoutes.post('/add', authentication, projectControllers.addProject);
projectRoutes.put('/:projectId', authentication, projectControllers.updateProject);
projectRoutes.get('/project', authentication, projectControllers.getProject);
projectRoutes.delete('/:projectId', authentication, projectControllers.deleteProjectById);

module.exports = projectRoutes;
