const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const userRoutes = require('./user.routes.js');
const internshipRoutes = require('./internship.routes');
const projectsRoutes = require('./project.routes');
const coursesRoutes = require('./course.routes');
const categoryRoutes = require('./category.routes');
const topicRoutes = require('./topic.routes');
const chapterRoutes = require('./chapter.routes');
const teachersRoutes = require('./teacher.routes');
const assignmentRoutes = require('./assignment.routes');
const assignmentFeedBackRoute = require('./assignment.feedback.routes');
const courseAssignmentRoutes = require('./course.assignments.routes');
const messagesRoutes = require('./message.routes');
const moduleRoutes = require('./module.route');

const apiRoutes = express.Router();
apiRoutes.use('/user', userRoutes);
apiRoutes.use('/internship', internshipRoutes);
apiRoutes.use('/assignments', assignmentRoutes);
apiRoutes.use('/assignment_feedback', assignmentFeedBackRoute);
apiRoutes.use('/course_assignments', courseAssignmentRoutes);
apiRoutes.use('/category', categoryRoutes);
apiRoutes.use('/project', projectsRoutes);
apiRoutes.use('/course', coursesRoutes);
apiRoutes.use('/topic', topicRoutes);
apiRoutes.use('/chapter', chapterRoutes);
apiRoutes.use('/message', messagesRoutes);
apiRoutes.use('/module', moduleRoutes);
apiRoutes.use('/teacher', teachersRoutes);

apiRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = apiRoutes;
