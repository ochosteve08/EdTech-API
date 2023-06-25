const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { assignmentFeedbackServices } = require('../../services');
const { assignmentValidation } = require('../../validations');
const { assignmentFeedBackValidation } = require('../../validations');

const createAssignmentFeedback = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    const { assignmentId } = await assignmentValidation.assignmentIdValidation.validateAsync(req.params);
    const { like, comment, rating } = await assignmentFeedBackValidation.createAssignmentFeedbackVal.validateAsync(req.body);
    const addedFeedback = await assignmentFeedbackServices.createUpdateTheFeedback({
      userId, assignmentId, like, comment, rating,
    });
    if (!addedFeedback) {
      throw error.throwNotFound({ message: 'Sorry! unable to create feedback' });
    }

    return success.handler({ addedFeedback }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const removeAssignmentFeedback = async (req, res, next) => {
  try {
    const { feedbackId } = await assignmentFeedBackValidation.assignmentFeedbackIdValidation.validateAsync(req.params);
    const deleteFeedback = await assignmentFeedbackServices.deleteAssignmentFeedback(feedbackId);
    if (!deleteFeedback) {
      throw error.throwNotFound({ message: 'Assignment Not Found' });
    }

    return success.handler({ deleteFeedback }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  createAssignmentFeedback, removeAssignmentFeedback,
};
