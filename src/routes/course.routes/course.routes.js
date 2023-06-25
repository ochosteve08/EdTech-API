const express = require('express');

const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { courseControllers } = require('../../controllers');

const courseRoutes = express.Router();

courseRoutes.post('/create', authentication, courseControllers.createCourse);
courseRoutes.get('/getCourses', authentication, courseControllers.findCourses);
courseRoutes.put('/:courseId', authentication, courseControllers.updateCourse);
courseRoutes.delete('/:courseId', authentication, courseControllers.deleteCourseById);

module.exports = courseRoutes;
