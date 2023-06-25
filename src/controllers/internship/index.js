const { addinternship, removeInternship, findInternship } = require('./post.internship.controller.js');
const { applyInternship, deleteInternship, getAppliedInternships } = require('./apply.Internship.controller');

module.exports = {
  applyInternship,
  deleteInternship,
  getAppliedInternships,
  addinternship,
  removeInternship,
  findInternship,
};
