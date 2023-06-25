const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  courseId: { type: Schema.Types.ObjectId, ref: 'course', required: true },
  additional_info: {
    type: String,
  },
}, {
  timestamps: true,
});

const EnrolledCourseModel = mongoose.model('enrolled_course', projectSchema);
module.exports = EnrolledCourseModel;
