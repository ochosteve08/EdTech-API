const mongoose = require('mongoose');

const { Schema } = mongoose;

const chapterSchema = new Schema({
  chapterName: {
    type: String,
    required: true,
  },
  moduleId: {
    type: Schema.Types.ObjectId,
    ref: 'module',
    required: true,
  },
  chapterDescription: {
    type: String,
    required: true,
  },
  videoSrc: {
    type: String,
  },
  duration: {
    type: Number,
  },
  comments: {
    type: Array,
  },
}, {
  timestamps: true,
});

const ChapterModel = mongoose.model('chapter', chapterSchema);

module.exports = ChapterModel;
