const express = require('express');

const { internshipControllers } = require('../../controllers');

const internshipRoutes = express.Router();

internshipRoutes.post('/', internshipControllers.applyInternship);

internshipRoutes.delete('/', internshipControllers.deleteInternship);

internshipRoutes.get('/', internshipControllers.getAppliedInternships);

module.exports = internshipRoutes;
