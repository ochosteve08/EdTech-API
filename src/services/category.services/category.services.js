const { CategoryModel } = require('../../models');

const getCategoryById = async ({ id }) => CategoryModel.findById(id);
const getCategory = async ({ categoryName }) => {
  const query = {};
  if (categoryName) {
    query.categoryName = categoryName;
  }
  return CategoryModel.find(query);
};
const deleteCategoryById = async ({ id }) => CategoryModel.findOneAndDelete({ _id: id });
const checkNameAndVersion = async ({ categoryName, categoryVersion }) => {
  const category = await CategoryModel.findOne({ categoryName, categoryVersion });
  return category;
};

const createCategory = async (
  { categoryName, categoryDescription, categoryVersion },
) => CategoryModel.create({
  categoryName,
  categoryDescription,
  categoryVersion,
});

module.exports = {
  getCategoryById,
  createCategory,
  getCategory,
  deleteCategoryById,
  checkNameAndVersion,
};
