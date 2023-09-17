const express = require('express');
const { internshipControllers } = require('../../controllers');

const postInternshipRoutes = express.Router();

postInternshipRoutes.get('/', internshipControllers.findInternship);
postInternshipRoutes.post('/create', internshipControllers.addinternship);
postInternshipRoutes.delete('/:internshipId', internshipControllers.removeInternship);

module.exports = postInternshipRoutes;
