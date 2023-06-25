const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationUserSchema = new Schema(
  {
    notified_user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    notification_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notification',
      required: true,
    },
    channel_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notificationChannel',
      required: true,
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  },
);

const NotificationUserModel = mongoose.model(
  'notificationUser',
  notificationUserSchema,
);
module.exports = NotificationUserModel;
