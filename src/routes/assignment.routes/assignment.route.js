const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');

const { assignmentController } = require('../../controllers');

const assignmentsRoutes = express.Router();

assignmentsRoutes.post('/assignment', authentication, assignmentController.addAssignment);
assignmentsRoutes.get('/assignment', authentication, assignmentController.findAssignments);
assignmentsRoutes.put('/:assignmentId', authentication, assignmentController.updateAssignment);
assignmentsRoutes.delete('/:assignmentId', authentication, assignmentController.removeAssignment);

module.exports = assignmentsRoutes;
