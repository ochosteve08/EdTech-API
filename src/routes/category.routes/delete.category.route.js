const express = require('express');
const { categoryControllers } = require('../../controllers');

const deleteCategoryRoutes = express.Router();
deleteCategoryRoutes.delete('/:id', categoryControllers.deleteCategoryById);

module.exports = {
  deleteCategoryRoutes,
};
