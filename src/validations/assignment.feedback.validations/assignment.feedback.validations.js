const enseedlingValidations = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const createAssignmentFeedbackVal = Joi.object().keys({

  comment: Joi.array()
    .items(enseedlingValidations.generic.string.small)
    .label('Comment'),
  rating: enseedlingValidations.generic.number.integer
    .min(1)
    .max(5)
    .label('Review'),
  like: enseedlingValidations.generic.boolean
    .valid(true, false)
    .label('Like'),
});

const assignmentFeedbackIdValidation = Joi.object().keys({
  feedbackId: enseedlingValidations._id.required().label('Feedback Id'),
});

module.exports = {
  createAssignmentFeedbackVal,
  assignmentFeedbackIdValidation,
};
