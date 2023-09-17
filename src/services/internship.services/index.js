const { applyInternship, getAppliedInternships, deleteInternship } = require('./apply.internship.services');
const {
  createInternship, getAllInternship, getInternshipById, removePostInternship,
} = require('./post.internship.services.js');

module.exports = {
  applyInternship, deleteInternship, createInternship, getAllInternship, getInternshipById, getAppliedInternships, removePostInternship,
};
