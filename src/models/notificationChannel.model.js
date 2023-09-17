const mongoose = require('mongoose');

const notificationChannelSchema = new mongoose.Schema(
  {
    channelName: {
      type: String,
      required: true,
    },
    channelDescription: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    channelImage: {
      type: String,
      required: false,
    },

    channelUsers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
    ],
  },
  {
    timestamps: true,
  },
);

const NotificationChannelModel = mongoose.model('notificationChannel', notificationChannelSchema);
module.exports = NotificationChannelModel;
