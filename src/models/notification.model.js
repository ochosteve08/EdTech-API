const mongoose = require('mongoose');

const { Schema } = mongoose;

const notificationSchema = new Schema(
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
    is_read: {
      type: Boolean,
      required: false,
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
    notification_image: {
      type: String,
      required: false,
    },

    redirect_url: {
      type: String,
      required: false,
    }
    ,
  },
  {
    timestamps: true,
  },
);

const NotificationModel = mongoose.model('notification', notificationSchema);
module.exports = NotificationModel;
