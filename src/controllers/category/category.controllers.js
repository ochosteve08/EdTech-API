const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { categoryValidation } = require('../../validations');
const { categoryServices } = require('../../services');

// fetching all available categories or category-name
const fetchCategory = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { categoryName } = req.query;
    // check for category
    const category = await categoryServices.getCategory({ categoryName });
    return success.handler(
      { category },
      req,
      res,
      next,
    );
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

// fetching by category id
const fetchCategoryById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    if (!req.params.id) {
      throw error.throwNotFound({ message: 'id not found' });
    }

    const { id } = await categoryValidation.categoryIdValidation.validateAsync(
      req.params,
    );
    const category = await categoryServices.getCategoryById({ id });
    if (!category) {
      throw error.throwNotFound({ message: 'category not found' });
    }
    return success.handler({ category }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const deleteCategoryById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { id } = await categoryValidation.categoryIdValidation.validateAsync(
      req.params,
    );
    const deleteCategory = await categoryServices.deleteCategoryById({ id });
    if (!deleteCategory) {
      throw error.throwNotFound({ message: 'category not found' });
    }
    return success.handler({ deleteCategory }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const createCategory = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    // step 1. take all params from category and validate them
    const { categoryName, categoryDescription, categoryVersion } = await categoryValidation.addCategoryValidation.validateAsync(req.body);
    // check if category name and version exist
    const existingCategory = await categoryServices.checkNameAndVersion({
      categoryName,
      categoryVersion,
    });
    if (existingCategory) {
      throw error.throwConflict({
        message: 'Category with the same name and version already exists',
      });
    }
    // create new category
    const newCategory = await categoryServices.createCategory({
      categoryName,
      categoryDescription,
      categoryVersion,
    });
    return success.handler({ newCategory }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  fetchCategory,
  fetchCategoryById,
  deleteCategoryById,
  createCategory,
};
