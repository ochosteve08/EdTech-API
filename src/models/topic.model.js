const mongoose = require('mongoose');

const { Schema } = mongoose;

const topicSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true,
  },
  topicName: {
    type: String,
    required: true,
  },
  topicDescription: {
    type: String,
    required: true,
  },
  topicDuration: {
    type: Number,
    required: true,
  },
  topicInfo: {
    type: String,
  },
  demoSrc: {
    type: String,
  },
  totalVideos: {
    type: Number,
  },
}, {
  timestamps: true,
});

const TopicModel = mongoose.model('topic', topicSchema);
module.exports = TopicModel;
