const { addAssignment } = require('./assignment.controller');
const { findAssignment } = require('./assignment.controller');
const { findAssignments } = require('./assignment.controller');
const { updateAssignment } = require('./assignment.controller');
const { removeAssignment } = require('./assignment.controller');

module.exports = {
  addAssignment, findAssignment, findAssignments, updateAssignment, removeAssignment,
};
