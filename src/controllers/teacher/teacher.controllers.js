const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { teacherValidation } = require('../../validations');
const { teacherServices } = require('../../services');

const createTeacher = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      teacherName,
      email,
      contactNo,
      profilePic,
      description,
      qualification,
      document_certificates,
      experience,
      designation,
      expertise,
      socialMedia,
    } = await teacherValidation.createTeacherValidation.validateAsync(req.body);

    const teacher = await teacherServices.createTeacher({
      teacherName,
      email,
      contactNo,
      profilePic,
      description,
      qualification,
      document_certificates,
      experience,
      designation,
      expertise,
      socialMedia,
    });
    return success.handler({ teacher }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateTeacher = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      teacherName,
      email,
      contactNo,
      profilePic,
      description,
      qualification,
      document_certificates,
      experience,
      designation,
      expertise,
      socialMedia,
    } = await teacherValidation.updateTeacherValidation.validateAsync(req.body);
    const { teacherId } = await teacherValidation.deleteTeacherValidation.validateAsync(req.params);
    const teacher = await teacherServices.updateTheTeacher({
      teacherId,
      teacherName,
      email,
      contactNo,
      profilePic,
      description,
      qualification,
      document_certificates,
      experience,
      designation,
      expertise,
      socialMedia,
    });
    return success.handler({ message: 'teacher updated', teacher }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

// Delete by project id
const deleteTeacherById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { teacherId } = await teacherValidation.deleteTeacherValidation.validateAsync(req.params);
    const teacher = await teacherServices.deleteTeacherById({ teacherId });
    if (!teacher) {
      throw error.throwNotFound({ message: 'Teacher' });
    }
    return success.handler({ message: 'Teacher has been successfully deleted.', teacher }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};
const getTeacher = async (req, res, next) => {
  try {
    const { teacherName, teacherId } = await teacherValidation.getTeacherValidation.validateAsync(req.query);
    const teacher = await teacherServices.getTeacher({ teacherId, teacherName });
    return success.handler(
      { teacher },
      req,
      res,
      next,
    );
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  createTeacher,
  updateTeacher,
  deleteTeacherById,
  getTeacher,
};
