const express = require('express');
const {
  header: { authentication },
} = require('@Enseedling/enseedling-lib-middlewares');
const { moduleControllers } = require('../../controllers');

const moduleRoute = express.Router();

moduleRoute.post('/', authentication, moduleControllers.createModule);
moduleRoute.get('/:id', authentication, moduleControllers.getModule);
moduleRoute.get('/all/:topicId', authentication, moduleControllers.getModules);
moduleRoute.put('/:id', authentication, moduleControllers.updateModule);
moduleRoute.delete('/:id', authentication, moduleControllers.deleteModule);

module.exports = moduleRoute;
