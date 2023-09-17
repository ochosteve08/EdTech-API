const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { assignmentServices } = require('../../services');
const { assignmentValidation } = require('../../validations');

const addAssignment = async (req, res, next) => {
  try {
    const {
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    } = await assignmentValidation.addAssignmentValidation.validateAsync(req.body);
    const assignments = await assignmentServices.createAssignment({
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    });

    if (!assignments) {
      throw error.throwNotFound({ message: 'Unable to Create Assignment. Try Again' });
    }

    return success.handler({ assignments }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const findAssignments = async (req, res, next) => {
  try {
    const {
      title, category, isActive, difficultyLevel,
      marks,
    } = await assignmentValidation.findAssignmentValidation.validateAsync(req.query);
    const {
      assignmentId: _id,
    } = await assignmentValidation.findAssignmentValidation.validateAsync(req.query);
    const assignments = await assignmentServices.getAssignments({
      _id,
      title,
      category,
      isActive,
      difficultyLevel,
      marks,
    });
    if (!assignments.length) {
      throw error.throwNotFound({ message: 'Assignment Not Found' });
    }
    return success.handler({ assignments }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeAssignment = async (req, res, next) => {
  try {
    const { id } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    const deleteAssignment = await assignmentServices.deleteAssignment(id);

    if (!deleteAssignment) {
      throw error.throwNotFound({ message: 'Assignment Not Found' });
    }
    return success.handler({ deleteAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateAssignment = async (req, res, next) => {
  try {
    const {
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    } = await assignmentValidation.updateAssignmentValidation.validateAsync(req.body);
    const { id } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    const updatedAssignment = await assignmentServices.updateTheAssignment({
      id,
      title,
      description,
      requirements,
      isActive,
      category,
      topics,
      createdBy,
      difficultyLevel,
      deadline,
      marks,
    });
    if (!updatedAssignment) {
      throw error.throwNotFound({ message: 'Sorry! unable to update assignment' });
    }
    return success.handler({ updatedAssignment }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  addAssignment, findAssignments, removeAssignment, updateAssignment,
};
