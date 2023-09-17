const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { courseAssignmentServices } = require('../../services');
const { courseAssignmentValidation } = require('../../validations');

const addCourseAssignment = async (req, res, next) => {
  try {
    const {
      courseId, assignmentId, status, courseCompletion,
    } = await courseAssignmentValidation.addCourseAssignmentVal.validateAsync(
      req.body,
    );
    const assignmentIdExist = await courseAssignmentServices.courseAssignmentExist({ assignmentId });

    if (!assignmentIdExist) {
      throw error.throwNotFound({ message: 'Assignment does not match any' });
    }

    const addedCourseAssignment = await courseAssignmentServices.createCourseAssignment({
      courseId,
      assignmentId,
      status,
      courseCompletion,
    });
    if (!addedCourseAssignment) {
      throw error.throwNotFound({
        message: 'Error occurred during adding Course Assignment ',
      });
    }

    return success.handler({ addedCourseAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findCourseAssignment = async (req, res, next) => {
  try {
    const {
      courseAssignmentsId: _id,
      status,
      courseCompletion,
    } = await courseAssignmentValidation.findCourseAssignmentVal.validateAsync(
      req.query,
    );
    const courseAssignments = await courseAssignmentServices.getCourseAssignment({
      _id,
      status,
      courseCompletion,
    });

    if (!courseAssignments.length) {
      throw error.throwNotFound({
        message: 'Course Assignment does not exist ',
      });
    }
    return success.handler({ courseAssignments }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeCourseAssignment = async (req, res, next) => {
  try {
    const { courseAssignmentsId } = await courseAssignmentValidation.courseAssignmentIdVal.validateAsync(
      req.params,
    );
    const deletedCourseAssignment = await courseAssignmentServices.deleteCourseAssignment(
      courseAssignmentsId,
    );
    if (!deletedCourseAssignment) {
      throw error.throwNotFound({
        message: 'unable to delete Course Assignment ',
      });
    }

    return success.handler({ deletedCourseAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateCourseAssignment = async (req, res, next) => {
  try {
    const {
      courseId, assignmentId, status, courseCompletion,
    } = await courseAssignmentValidation.updateCourseAssignmentVal.validateAsync(
      req.body,
    );

    const { courseAssignmentsId: _id } = await courseAssignmentValidation.courseAssignmentIdVal.validateAsync(
      req.params,
    );
    const assignmentIdExist = await courseAssignmentServices.courseAssignmentExist({ assignmentId });

    if (!assignmentIdExist) {
      throw error.throwNotFound({ message: 'Assignment does not exist' });
    }

    const updatedCourseAssignment = await courseAssignmentServices.updateTheCourseAssignment({
      _id,
      courseId,
      assignmentId,
      status,
      courseCompletion,
    });

    if (!updatedCourseAssignment) {
      throw error.throwNotFound({
        message: 'unable to update Course Assignment ',
      });
    }
    return success.handler({ updatedCourseAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  addCourseAssignment,
  findCourseAssignment,
  removeCourseAssignment,
  updateCourseAssignment,
};
