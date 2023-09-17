const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['read', 'unread'],
      default: 'unread',
    },
    isRead: {
      type: Boolean,
      required: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    notificationImage: {
      type: String,
      required: false,
    },

    redirectUrl: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
  },
);

const NotificationModel = mongoose.model('notification', notificationSchema);
module.exports = NotificationModel;
