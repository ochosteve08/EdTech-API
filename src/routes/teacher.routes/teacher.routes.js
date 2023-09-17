const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { teacherControllers } = require('../../controllers');

const teacherRoutes = express.Router();
teacherRoutes.post('/', authentication, teacherControllers.createTeacher);
teacherRoutes.put('/:teacherId', authentication, teacherControllers.updateTeacher);
teacherRoutes.get('/', authentication, teacherControllers.getTeacher);
teacherRoutes.delete('/:teacherId', authentication, teacherControllers.deleteTeacherById);

module.exports = teacherRoutes;
