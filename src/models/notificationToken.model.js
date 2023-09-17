const mongoose = require('mongoose');

const notificationTokenSchema = new mongoose.Schema(
  {
    token: {
      type: String,
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const NotificationTokenModel = mongoose.model(
  'notificationToken',
  notificationTokenSchema,
);
module.exports = NotificationTokenModel;
