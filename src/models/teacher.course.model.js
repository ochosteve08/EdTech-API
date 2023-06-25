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

teacherCourseSchema.pre(/^find/, function (next) {
  this.populate({
    path: 'teachers, courses ',
    select: 'teacherName, description, course_name, course_description',
  });
  next();
});

const TeacherCourseModel = mongoose.model('teacher_course', teacherCourseSchema);
module.exports = TeacherCourseModel;
