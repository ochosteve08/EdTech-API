const express = require('express');
const { internshipControllers } = require('../../controllers');

const postInternshipRoutes = express.Router();

postInternshipRoutes.get('/', internshipControllers.findInternship);
postInternshipRoutes.post('/', internshipControllers.addInternship);
postInternshipRoutes.delete('/:internshipId', internshipControllers.removeInternship);

module.exports = postInternshipRoutes;
