const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addCategoryValidation = Joi.object().keys({
  categoryName: enseedlingValidator.generic.string.medium
    .required()
    .label('Category Name'),
  categoryVersion: enseedlingValidator.generic.string.medium
    .required()
    .label('Category Version'),
  categoryDescription: enseedlingValidator.generic.string.any
    .required()
    .label('Category Description'),
});

const categoryNameValidation = Joi.object().keys({
  categoryName: enseedlingValidator.generic.string.any.required(),
});

const categoryIdValidation = Joi.object().keys({
  id: enseedlingValidator._id.required(),
});

module.exports = {
  addCategoryValidation,
  categoryIdValidation,
  categoryNameValidation,
};
