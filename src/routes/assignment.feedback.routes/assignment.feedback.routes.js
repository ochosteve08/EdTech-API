const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { assignmentFeedBack } = require('../../controllers');

const assignmentFeedbackRoutes = express.Router();

assignmentFeedbackRoutes.put('/:assignmentId', authentication, assignmentFeedBack.createAssignmentFeedback);
assignmentFeedbackRoutes.delete('/:feedbackId', authentication, assignmentFeedBack.removeAssignmentFeedback);

module.exports = assignmentFeedbackRoutes;
