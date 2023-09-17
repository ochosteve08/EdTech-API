const express = require('express');
const { categoryControllers } = require('../../controllers');

const getCategoryRoutes = express.Router();

getCategoryRoutes.get('/:id', categoryControllers.fetchCategoryById);
getCategoryRoutes.get('/', categoryControllers.fetchCategory);

module.exports = {
  getCategoryRoutes,
};
