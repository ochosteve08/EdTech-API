const { findCourses } = require('./course.controllers');
const { createCourse } = require('./course.controllers');
const { updateCourse } = require('./course.controllers');
const { deleteCourseById } = require('./course.controllers');

module.exports = {
  findCourses,
  createCourse,
  updateCourse,
  deleteCourseById,
};
