const mongoose = require('mongoose');

const { Schema } = mongoose;

const projectTask = new Schema({
  projectId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  taskId: {
    type: String,
    required: true,
  },
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,

  },
  approveStatus: {
    type: String,
    required: true,
    defualt: 'pending',
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
}, {
  timestamps: true,
});

const taskModel = mongoose.model('projectTasks', projectTask);

module.exports = taskModel;
