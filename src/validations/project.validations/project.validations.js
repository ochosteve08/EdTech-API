const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');
const { PROJECT_STATUS } = require('../../const');
const { PROJECT_VISIBILITY } = require('../../const');

const addProjectValidation = Joi.object().keys({
  comments: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Comments'),
  visibility: enseedlingValidator.generic.number.integer.valid(PROJECT_VISIBILITY.public, PROJECT_VISIBILITY.private).label('Visibility'),
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
  projectTitle: enseedlingValidator.generic.string.any.required().label('Project Title'),
  projectDescription: enseedlingValidator.generic.string.any.required().label('Project Description'),
  projectLink: enseedlingValidator.generic.string.medium.required().label('Project Link'),
  projectImage: enseedlingValidator.generic.string.medium.label('Project Image'),
  projectMilestone: enseedlingValidator.generic.string.medium.label('Project Milestone'),
  status: enseedlingValidator.generic.number.integer.valid(PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do).label('Status'),
  categoryIds: enseedlingValidator._id.required().label('Category Id'),
  userId: enseedlingValidator._id.required().label('User Id'),
});

const getProjectValidation = Joi.object().keys({
  projectTitle: enseedlingValidator.generic.string.medium.label('Project Title'),
  status: enseedlingValidator.generic.number.integer.valid(PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do),
  projectId: enseedlingValidator._id.label('Project Id'),
  userId: enseedlingValidator._id.label('User Id'),
  categoryIds: enseedlingValidator._id.label('Category Id'),
});
const userIdValidation = Joi.object().keys({
  userId: enseedlingValidator._id.required(),
});
const projectIdValidation = Joi.object().keys({
  projectId: enseedlingValidator._id.required(),
});
const updateProjectValidation = Joi.object().keys({
  comments: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Comments'),
  visibility: enseedlingValidator.generic.number.integer.valid(PROJECT_VISIBILITY.public, PROJECT_VISIBILITY.private).label('Visibility'),
  startDate: Joi.date().label('Start Date'),
  endDate: Joi.date().label('End Date'),
  projectTitle: enseedlingValidator.generic.string.any.label('Project Title'),
  projectDescription: enseedlingValidator.generic.string.any.label('Project Description'),
  projectLink: enseedlingValidator.generic.string.medium.label('Project Link'),
  projectImage: enseedlingValidator.generic.string.medium.label('Project Image'),
  projectMilestone: enseedlingValidator.generic.string.medium.label('Project Milestone'),
  status: enseedlingValidator.generic.number.integer.valid(PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do).label('Status'),
  categoryIds: enseedlingValidator._id.label('Category'),
  userId: enseedlingValidator._id.label('User Id'),
});

module.exports = {
  addProjectValidation,
  getProjectValidation,
  userIdValidation,
  updateProjectValidation,
  projectIdValidation,
};
