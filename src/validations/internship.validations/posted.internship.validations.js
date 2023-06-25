const Joi = require('joi');
const enseedlingValidator = require('@Enseedling/enseedling-validations');

const postedInternshipValidation = Joi.object({
  categoryId: enseedlingValidator.generic.string.medium.required().label('Category Id'),
  internshipTitle: enseedlingValidator.generic.string.medium.required().label('internshipTitle'),
  internshipDescription: enseedlingValidator.generic.string.medium.required().label('Internship Description'),
  internshipType: enseedlingValidator.generic.string.medium.required().label('Internship Type'),
  skills: enseedlingValidator.generic.string.medium.required().label(' Skills '),
  responsibilities: enseedlingValidator.generic.string.medium.required().label('Responsibilities'),
  qualification: enseedlingValidator.generic.string.medium.required().label('Qualification'),
  internshipEndDate: enseedlingValidator.generic.string.medium.required().label('internshipEndDate'),
  numberOfOpenings: enseedlingValidator.generic.number.integer.required().label('Number of Openings'),
  internshipStatus: enseedlingValidator.generic.number.integer.valid('Active', 'inActive').default('Active').label('Publication Status'),
  internshipLocation: enseedlingValidator.generic.string.medium.required().label('Internship Location'),
  experienceLevel: enseedlingValidator.generic.string.medium.valid('Entry_Level', 'Junior_Level', 'Mid Level', 'Senior Level').label('Experience Level'),
  ApprovedAt: enseedlingValidator.generic.string.medium.label('Approved At'),
  approvedBy: enseedlingValidator.generic.string.medium.label('Approved By'),
  status: enseedlingValidator.generic.string.medium.valid('Approved', 'Rejected', 'Pending')
    .default('Pending')
    .label('Status'),
});
const deletePostInternshipValidation = Joi.object({
  internshipId: enseedlingValidator.generic.string.medium.required().label('Internship Id'),
});

module.exports = {
  postedInternshipValidation,
  deletePostInternshipValidation,
};
