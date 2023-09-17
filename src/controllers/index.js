const userControllers = require('./user');
const internshipControllers = require('./internship');
const assignmentController = require('./assignment');
const assignmentFeedBack = require('./assignment.Feedback');
const courseAssignmentController = require('./courseAssignment');
const categoryControllers = require('./category');
const projectControllers = require('./project');
const courseControllers = require('./course');
const chapterControllers = require('./chapter');
const topicControllers = require('./topic');
const messageControllers = require('./message');
const uploadControllers = require('./upload_resume');
const teacherControllers = require('./teacher');
const moduleControllers = require('./module');

module.exports = {
  userControllers,
  internshipControllers,
  assignmentController,
  assignmentFeedBack,
  courseAssignmentController,
  projectControllers,
  courseControllers,
  categoryControllers,
  topicControllers,
  chapterControllers,
  messageControllers,
  uploadControllers,
  teacherControllers,
  moduleControllers,
};
