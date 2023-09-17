const mongoose = require('mongoose');

const courseAssignmentSchema = new mongoose.Schema({

  courseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'courses',
    required: true,
  },
  assignmentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'assignments',
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  courseCompletion: {
    type: Boolean,
    required: true,
  },
});

const CourseAssignmentModel = mongoose.model('course_assignment', courseAssignmentSchema);

module.exports = CourseAssignmentModel;
