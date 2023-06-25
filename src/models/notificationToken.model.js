const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationTokenSchema = new Schema(
  {
    token: {
      type: String,
      required: true,
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
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

const NotificationTokenModel = mongoose.model(
  'notificationToken',
  notificationTokenSchema,
);
module.exports = NotificationTokenModel;
