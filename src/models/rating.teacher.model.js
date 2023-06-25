const mongoose = require('mongoose');

const { Schema } = mongoose;

const teacherRatingSchema = new Schema({
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  ratingValue: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array,
  },

}, {
  timestamps: true,
});

const TeacherRatingModel = mongoose.model('teacher_rating', teacherRatingSchema);
module.exports = TeacherRatingModel;
