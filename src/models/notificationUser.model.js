const mongoose = require('mongoose');

const notificationUserSchema = new mongoose.Schema(
  {
    notifiedUser: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    notificationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notification',
      required: true,
    },
    channelId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'notificationChannel',
      required: true,
    },
  },
  { timestamps: true },

);

const NotificationUserModel = mongoose.model(
  'notificationUser',
  notificationUserSchema,
);
module.exports = NotificationUserModel;
