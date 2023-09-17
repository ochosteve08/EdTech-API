const { postedInternshipValidation } = require('./posted.internship.validations');
const { appliedInternshipValidation, deleteInternshipValidation } = require('./applied.internship.validations');

module.exports = {
  appliedInternshipValidation,
  deleteInternshipValidation,
  postedInternshipValidation,

};
