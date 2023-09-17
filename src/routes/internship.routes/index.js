const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const applyInternshipRoutes = require('./apply.internship.routes');
const postInternshipRoutes = require('./post.internship.routes');

const internshipRoutes = express.Router();

internshipRoutes.use('/applyInternship', applyInternshipRoutes);
internshipRoutes.use('/postInternship', postInternshipRoutes);

internshipRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = internshipRoutes;
