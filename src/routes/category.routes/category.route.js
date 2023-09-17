const express = require('express');
const {
  header: { authentication },
} = require('@Enseedling/enseedling-lib-middlewares');
const { categoryControllers } = require('../../controllers');

const CategoryRoute = express.Router();

CategoryRoute.post('/', authentication, categoryControllers.createCategory);
CategoryRoute.delete(
  '/:id',
  authentication,
  categoryControllers.deleteCategoryById,
);
CategoryRoute.get(
  '/:id',
  authentication,
  categoryControllers.fetchCategoryById,
);
CategoryRoute.get('/', authentication, categoryControllers.fetchCategory);

module.exports = CategoryRoute;
