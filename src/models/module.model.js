const mongoose = require('mongoose');

const { Schema } = mongoose;

const moduleSchema = new Schema({
  moduleName: {
    type: String,
    required: true,
  },
  topicId: {
    type: Schema.Types.ObjectId,
    ref: 'topic',
    required: true,
  },
  moduleDescription: {
    type: String,
    required: true,
  },
  demoSrc: {
    type: String,
  },
  totalChapters: {
    type: Number,
  },
  moduleDuration: {
    type: Number,
    required: true,
  },
}, {
  timestamps: true,
});

const ModuleModel = mongoose.model('module', moduleSchema);

module.exports = ModuleModel;
