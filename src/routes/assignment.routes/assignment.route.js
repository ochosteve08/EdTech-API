const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');

const { assignmentController } = require('../../controllers');

const assignmentsRoutes = express.Router();

assignmentsRoutes.post('/', authentication, assignmentController.addAssignment);
assignmentsRoutes.get('/', authentication, assignmentController.findAssignments);
assignmentsRoutes.put('/:id', authentication, assignmentController.updateAssignment);
assignmentsRoutes.delete('/:id', authentication, assignmentController.removeAssignment);

module.exports = assignmentsRoutes;
