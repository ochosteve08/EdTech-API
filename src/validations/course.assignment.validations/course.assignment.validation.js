const enseedlingValidations = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

// courseId  assignmentId  status  courseCompletition

const addCourseAssignmentVal = Joi.object().keys({
  courseId: enseedlingValidations._id.required().label('Course Id'),
  assignmentId: enseedlingValidations._id.required().label('Assignment Id'),
  status: enseedlingValidations.generic.number.integer
    .required()
    .min(0)
    .max(100)
    .label('Status'),
  courseCompletition: enseedlingValidations.generic.boolean
    .required()
    .valid(true, false)
    .label('Course Completition'),
});

const findCourseAssignmentVal = Joi.object().keys({
  courseAssignmentsId: enseedlingValidations._id.label('Course Assignment Id'),
  courseId: enseedlingValidations._id.label('Course Id'),
  status: enseedlingValidations.generic.number.integer
    .min(0)
    .max(100)
    .label('Status'),
  courseCompletition: enseedlingValidations.generic.boolean
    .valid(true, false)
    .label('Course Completition'),
});

const updateCourseAssignmentVal = Joi.object().keys({
  courseId: enseedlingValidations._id.required().label('Course Id'),
  assignmentId: enseedlingValidations._id.required().label('Assignment Id'),
  status: enseedlingValidations.generic.number.integer
    .min(0)
    .max(100)
    .label('Status'),
  courseCompletition: enseedlingValidations.generic.boolean
    .valid(true, false)
    .label('Course Completition'),
});

const courseAssignmentIdVal = Joi.object().keys({
  courseAssignmentsId: enseedlingValidations._id.required().label('Course Assignment Id'),
});

module.exports = {
  addCourseAssignmentVal,
  findCourseAssignmentVal,
  updateCourseAssignmentVal,
  courseAssignmentIdVal,
};
