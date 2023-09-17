const userValidation = require('./user.validations');
const assignmentValidation = require('./assignments.validations');
const assignmentFeedBackValidation = require('./assignment.feedback.validations');
const courseAssignmentValidation = require('./course.assignment.validations');
const projectValidation = require('./project.validations');
const categoryValidation = require('./category.validations');
const internshipValidation = require('./internship.validations');
const courseValidation = require('./course.validations');
const topicValidation = require('./topic.validations');
const chapterValidation = require('./chapter.validations');
const teacherValidation = require('./teacher.validations');
const messagesValidation = require('./message.validations');
const moduleValidation = require('./module.validations');

module.exports = {
  userValidation,
  projectValidation,
  categoryValidation,
  internshipValidation,
  assignmentValidation,
  assignmentFeedBackValidation,
  courseAssignmentValidation,
  courseValidation,
  chapterValidation,
  messagesValidation,
  topicValidation,
  moduleValidation,
  teacherValidation,
};
