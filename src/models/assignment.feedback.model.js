const mongoose = require('mongoose');

const assgnmentFeedbackSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'assignments',
    required: true,
  },
  rating: {
    type: Number,

  },
  comment: {
    type: Array,

  },
  like: {
    type: Boolean,
  },

});

const assignmentFeedbackModel = mongoose.model('assignment_feedback ', assgnmentFeedbackSchema);

module.exports = assignmentFeedbackModel;
