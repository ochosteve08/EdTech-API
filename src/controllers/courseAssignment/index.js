const { addCourseAssignment } = require('./courseAssignment.controller');
const { findCourseAssignment } = require('./courseAssignment.controller');
const { updateCourseAssignment } = require('./courseAssignment.controller');
const { removeCourseAssignment } = require('./courseAssignment.controller');

module.exports = {
  addCourseAssignment,
  findCourseAssignment,
  updateCourseAssignment,
  removeCourseAssignment,
};
