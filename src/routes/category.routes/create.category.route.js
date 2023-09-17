const express = require('express');
const { categoryControllers } = require('../../controllers');

const createCategoryRoutes = express.Router();

createCategoryRoutes.post('/', categoryControllers.createCategory);

module.exports = { createCategoryRoutes };
