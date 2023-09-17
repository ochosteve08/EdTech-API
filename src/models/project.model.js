const mongoose = require('mongoose');

const { Schema } = mongoose;

const { PROJECT_STATUS } = require('../const');
const { PROJECT_VISIBILITY } = require('../const');

const projectSchema = new Schema({
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: String,
    required: true,
  },
  projectLink: {
    type: String,
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
  projectImage: {
    type: String,
  },
  projectMilestone: {
    type: String,
  },
  status: {
    type: Number,
    enum: [PROJECT_STATUS.pending, PROJECT_STATUS.in_progress, PROJECT_STATUS.completed, PROJECT_STATUS.to_do],
    required: true,
  },
  visibility: {
    type: Number,
    enum: [PROJECT_VISIBILITY.public, PROJECT_VISIBILITY.private],
    required: true,
  },
  categoryIds: { type: Schema.Types.ObjectId, ref: 'category', required: true },
  comments: {
    type: Array,
  },
  userId: { type: Schema.Types.ObjectId, ref: 'user', required: true },
}, {
  timestamps: true,
});

const ProjectModel = mongoose.model('project', projectSchema);
module.exports = ProjectModel;
