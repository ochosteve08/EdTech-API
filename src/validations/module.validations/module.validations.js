const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addModuleValidation = Joi.object().keys({
  moduleName: enseedlingValidator.generic.string.any
    .required()
    .label('Module Name'),
  moduleDescription: enseedlingValidator.generic.string.any
    .required()
    .label('Module Description'),
  moduleDuration: enseedlingValidator.generic.number.integer
    .required()
    .label('Module Duration'),
  totalChapters: enseedlingValidator.generic.number.integer
    .required()
    .label('Total Chapters'),
  demoSrc: enseedlingValidator.generic.string.medium.label('Demo Src'),
  topicId: enseedlingValidator._id.required().label('Topic Id'),
});
const topicIdValidation = Joi.object().keys({
  id: enseedlingValidator._id.required().label('Topic Id'),
});

const moduleIdValidation = Joi.object().keys({
  id: enseedlingValidator._id.required().label('Module Id'),
});

const updateModuleValidation = Joi.object().keys({
  moduleName: enseedlingValidator.generic.string.any
    .required()
    .label('Module Name'),
  moduleDescription: enseedlingValidator.generic.string.any
    .required()
    .label('Module Description'),
  moduleDuration: enseedlingValidator.generic.number.integer
    .required()
    .label('Module Duration'),
  totalChapters: enseedlingValidator.generic.number.integer
    .required()
    .label('Total Chapters'),
  demoSrc: enseedlingValidator.generic.string.medium.label('Demo Src'),
  topicId: enseedlingValidator._id.required().label('Topic Id'),
});

module.exports = {
  addModuleValidation,
  topicIdValidation,
  moduleIdValidation,
  updateModuleValidation,
};
