const express = require('express');
// const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { courseAssignmentController } = require('../../controllers');

const courseAssignmentsRoutes = express.Router();
courseAssignmentsRoutes.post('/', courseAssignmentController.addCourseAssignment);
courseAssignmentsRoutes.get('/', courseAssignmentController.findCourseAssignment);
courseAssignmentsRoutes.put('/:courseAssignmentsId', courseAssignmentController.updateCourseAssignment);
courseAssignmentsRoutes.delete('/:courseAssignmentsId', courseAssignmentController.removeCourseAssignment);

module.exports = courseAssignmentsRoutes;
