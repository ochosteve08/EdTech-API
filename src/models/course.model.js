const mongoose = require('mongoose');

const { Schema } = mongoose;

const courseSchema = new Schema({
  courseName: {
    type: String,
    required: true,
  },
  comments: {
    type: Array,
  },
  courseDescription: {
    type: String,
    required: true,
  },
  courseDuration: {
    type: Number,
    required: true,
  },
  courseRating: {
    type: Schema.Types.ObjectId,
    ref: 'rating',
  },
  courseThumbImage: {
    type: String,
    required: true,
  },
  courseState: {
    type: String,
  },
  categoryIds: [{
    type: Schema.Types.ObjectId,
    ref: 'category',
    required: true,
  }],
  socialMediaLinks: {
    type: Array,
  },
  totalVideos: {
    type: Number,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  capacity: {
    type: Number,
  },
  status: {
    type: String,
    enum: ['pending', 'in_progress', 'completed', 'to_do'],
    default: 'pending',
  },
  topics: [{
    type: Schema.Types.ObjectId,
    ref: 'topic',
    required: true,
  }],
  modules: [{
    type: Schema.Types.ObjectId,
    ref: 'module',
    required: true,
  }],
  chapters: [{
    type: Schema.Types.ObjectId,
    ref: 'chapter',
    required: true,
  }],
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    // required: true,
  },
  instructorId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    // required: true,
  },
  demoVideoSrc: {
    type: String,
  },
  metaInfo: {
    type: Array,

  },
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// courseSchema.pre(/^find/, function(next) {
//     this.populate({
//          path: 'topics, modules, chapters ',
//          select: 'topic_name, topics_description, module_name, module_description, chapter_name, video_src',
//     });
//     next();
// });

const CourseModel = mongoose.model('course', courseSchema);

module.exports = CourseModel;
// course_info: {
//    course_name,
//    course_des,
//    topics: [{
//    topic_name,
//   topic_des
//   modules: [{
//    module_name,
//   module_des
//   chapters: [{
//   },
//   {
//    chapter_name,
//   video_src
//   }],
//  }]
//  }
// courseSchema.pre(/^find/, function (next) {
//   this.populate({
//     path: 'topics, modules, chapters ',
//     select: 'topic_name, topics_description, module_name, module_description, chapter_name, video_src',
//   });
//   next();
// });ext();
// });
