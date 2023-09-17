const mongoose = require('mongoose');

const { Schema } = mongoose;

const teacherCourseSchema = new Schema({
  teacherId: {
    type: Schema.Types.ObjectId,
    ref: 'teacher',
    required: true,
  },
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true,
  },
}, {
  timestamps: true,
});

teacherCourseSchema.pre(/^find/, (next) => {
  this.populate({
    path: 'teacherId',
    select: 'teacherName',
  }).populate({
    path: 'courseId',
    select: 'description course_name course_description',
  });
  next();
});

const TeacherCourseModel = mongoose.model('teacher_course', teacherCourseSchema);
module.exports = TeacherCourseModel;
