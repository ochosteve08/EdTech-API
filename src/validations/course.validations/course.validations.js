const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const addCourseValidation = Joi.object().keys({
  courseName: enseedlingValidator.generic.string.any.required().label('Course Name'),
  comments: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Comments'),
  courseDescription: enseedlingValidator.generic.string.any.required().label('Course Description'),
  courseDuration: enseedlingValidator.generic.number.integer.required().label('Course Duration'),
  courseRating: enseedlingValidator._id.required().label('Course Rating'),
  courseThumbImage: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
  courseState: enseedlingValidator.generic.string.medium.label('Course State'),
  categoryIds: enseedlingValidator._id.required().label('Category'),
  socialMediaLinks: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Social Medial Links'),
  totalVideos: enseedlingValidator.generic.number.integer.required().label('Total Video'),
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
  capacity: enseedlingValidator.generic.number.integer.required().label('Capacity'),
  status: enseedlingValidator.generic.string.medium.label('Course Status'),
  createdBy: enseedlingValidator._id.required().label('Created By'),
  instructorId: enseedlingValidator._id.required().label('Insructor'),
  demoVideoSrc: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
  metaInfo: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Meta Info'),
});

const updateCourseValidation = Joi.object().keys({
  courseName: enseedlingValidator.generic.string.any.required().label('Course Name'),
  courseDescription: enseedlingValidator.generic.string.any.required().label('Course Description'),
  courseDuration: enseedlingValidator.generic.number.integer.required().label('Course Duration'),
  courseRating: enseedlingValidator._id.required().label('Course Rating'),
  courseThumbImage: enseedlingValidator.generic.string.medium.required().label('Course Thumb Image'),
  courseState: enseedlingValidator.generic.string.medium.label('Course State'),
  categoryIds: enseedlingValidator._id.required().label('Category'),
  socialMediaLinks: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Social Medial Links'),
  totalVideos: enseedlingValidator.generic.number.integer.required().label('Total Video'),
  startDate: Joi.date().required().label('Start Date'),
  endDate: Joi.date().required().label('End Date'),
  capacity: enseedlingValidator.generic.number.integer.required().label('Capacity'),
  status: enseedlingValidator.generic.string.medium.label('Course Status'),
  createdBy: enseedlingValidator._id.required().label('Created By'),
  instructorId: enseedlingValidator._id.required().label('Insructor'),
  demoVideoSrc: enseedlingValidator.generic.string.medium.required().label('Demo Video src'),
  metaInfo: Joi.array()
    .items(enseedlingValidator.generic.string.any)
    .label('Meta Info'),
});

const getCoursesValidation = Joi.object().keys({
  courseId: enseedlingValidator._id.label('Course Id'),
  courseName: enseedlingValidator.generic.string.medium.label('Course Name'),
  categoryIds: enseedlingValidator._id.label('Category Id'),
  isActive: Joi.boolean().label('Is Active'),
});

const courseIdValidation = Joi.object().keys({
  courseId: enseedlingValidator._id.required().label('Course Id'),
});

module.exports = {
  getCoursesValidation,
  courseIdValidation,
  addCourseValidation,
  updateCourseValidation,
};
