const express = require('express');
// const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { courseAssignmentController } = require('../../controllers');

const courseAssignmentsRoutes = express.Router();
courseAssignmentsRoutes.post('/course_assignments', courseAssignmentController.addCourseAssignment);
courseAssignmentsRoutes.get('/course_assignments', courseAssignmentController.findCourseAssignment);
courseAssignmentsRoutes.put('/:courseAssignmentsId', courseAssignmentController.updateCourseAssignment);
courseAssignmentsRoutes.delete('/:courseAssignmentsId', courseAssignmentController.removeCourseAssignment);

module.exports = courseAssignmentsRoutes;
