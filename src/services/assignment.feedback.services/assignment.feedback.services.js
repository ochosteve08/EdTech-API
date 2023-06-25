const { assignmentFeedbackModel } = require('../../models');

const createUpdateTheFeedback = async ({
  userId, assignmentId, like, comment, rating,
}) => {
  const filter = { assignmentId, userId };
  const update = {
    userId, like, comment, rating,
  };
  const upsert = { upsert: true, new: true };
  const output = await assignmentFeedbackModel.findOneAndUpdate(filter, update, upsert);
  return output;
};

const deleteAssignmentFeedback = async (feedbackId) => assignmentFeedbackModel.findByIdAndDelete(feedbackId);

module.exports = {
  createUpdateTheFeedback, deleteAssignmentFeedback,
};
