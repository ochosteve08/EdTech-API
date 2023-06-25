const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addTopicValidation = Joi.object().keys({
  topicName: enseedlingValidator.generic.string.any
    .required()
    .label('Topic Name'),
  topicDescription: enseedlingValidator.generic.string.any
    .required()
    .label('Topic Description'),
  topicDuration: enseedlingValidator.generic.number.integer
    .required()
    .label('Topic Duration'),
  totalVideos: enseedlingValidator.generic.number.integer
    .required()
    .label('Total Videos'),
  topicInfo: enseedlingValidator.generic.string.medium.label('Topic Info'),
  demoSrc: enseedlingValidator.generic.string.medium.label('Demo Src'),
  courseId: enseedlingValidator._id.required().label('Course Id'),
});
const getTopicsValidation = Joi.object().keys({
  courseId: enseedlingValidator._id.required().label('Course Id'),
});

const topicIdValidation = Joi.object().keys({
  topicId: enseedlingValidator._id.required().label('Topic Id'),
});

const updateTopicValidation = Joi.object().keys({
  topicName: enseedlingValidator.generic.string.any.label('Topic Name'),
  topicDescription:
    enseedlingValidator.generic.string.any.label('Topic Description'),
  topicDuration:
    enseedlingValidator.generic.number.integer.label('Topic Duration'),
  totalVideos: enseedlingValidator.generic.number.integer.label('Total Videos'),
  topicInfo: enseedlingValidator.generic.string.medium.label('Topic Info'),
  demoSrc: enseedlingValidator.generic.string.medium.label('Demo Src'),
  courseId: enseedlingValidator._id.label('Course Id'),
});

module.exports = {
  addTopicValidation,
  getTopicsValidation,
  topicIdValidation,
  updateTopicValidation,
};
