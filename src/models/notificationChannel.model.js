const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationChannelSchema = new Schema(
  {
    channel_name: {
      type: String,
      required: true,
    },
    channel_description: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'active',
    },
    created_at: {
      type: Date,
      default: Date.now(),
    },
    updated_at: {
      type: Date,
      default: Date.now(),
    },
    created_by: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: true,
    },
    channel_image: {
      type: String,
      required: false,
    },

    channel_users: [
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
