const enseedlingValidations = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.small.required().label('Title'),
  description: enseedlingValidations.generic.string.any
    .required()
    .label('Description'),
  requirements: Joi.array()
    .items(enseedlingValidations.generic.string.medium)
    .required()
    .label('Requirements'),
  isActive: enseedlingValidations.generic.boolean
    .valid(true, false)
    .required()
    .label('isActive'),
  category: Joi.array()
    .items(enseedlingValidations._id)
    .required()
    .label('Category'),
  topics: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .required()
    .label('Topics'),
  createdBy: enseedlingValidations.generic.string.small
    .required()
    .label('Created By'),
  difficultyLevel: enseedlingValidations.generic.string.small
    .label('Difficulty Level'),
  deadline: Joi.date().label('Deadline'),
  marks: Joi.number().positive().label('Marks'),
});

const findAssignmentValidation = Joi.object().keys({
  assignmentId: enseedlingValidations._id.label('Assignment Id'),
  title: enseedlingValidations.generic.string.small.label('Title'),
  category: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .label('Category'),
  isActive: enseedlingValidations.generic.boolean
    .valid(true, false)
    .label('isActive'),
  difficultyLevel: enseedlingValidations.generic.string.small.label('Difficulty Level'),
  marks: Joi.number().positive().label('Marks'),

});

const updateAssignmentValidation = Joi.object().keys({
  title: enseedlingValidations.generic.string.small.label('Title'),
  description: enseedlingValidations.generic.string.any.label('Description'),
  requirements: Joi.array()
    .items(enseedlingValidations.generic.string.medium)
    .label('Requirements'),
  isActive: enseedlingValidations.generic.boolean
    .valid(true, false)
    .label('isActive'),
  category: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .label('Category'),
  topics: Joi.array().items(enseedlingValidations.generic.string.small).label('Topics'),
  createdBy: enseedlingValidations.generic.string.small.label('Created By'),
  difficultyLevel: enseedlingValidations.generic.string.small.label('Difficulty Level'),
  deadline: Joi.date().label('Deadline'),
  marks: Joi.number().positive().label('Marks'),
});

const assignmentIdValidation = Joi.object().keys({
  assignmentId: enseedlingValidations._id.required().label('Assignment Id'),
});

module.exports = {
  addAssignmentValidation,
  findAssignmentValidation,
  updateAssignmentValidation,
  assignmentIdValidation,
};
