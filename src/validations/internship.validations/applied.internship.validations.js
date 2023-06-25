const Joi = require('joi');
const enseedlingValidator = require('@Enseedling/enseedling-validations');

const appliedInternshipValidation = Joi.object({
  userId: enseedlingValidator.generic.string.medium.required().label('User Id'),
  internshipId: enseedlingValidator.generic.string.medium.required().label('Internship Id'),
  selectionStatus: Joi.string()
    .valid('Hired', 'Rejected', 'Shortlisted', 'pending')
    .default('Pending')
    .label('Selection Status'),
  additionalInformation: Joi.string().allow('').optional().label('Additional Information'),
});
const deleteInternshipValidation = Joi.object({
  internshipId: enseedlingValidator.generic.string.medium.required().label('Internship Id'),
});

module.exports = {
  appliedInternshipValidation,
  deleteInternshipValidation,
};
