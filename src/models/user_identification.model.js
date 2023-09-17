const mongoose = require('mongoose');

const { Schema } = mongoose;

const userIdentificationSchema = new Schema({
  id: {
    type: String,
    required: true,
    maxlength: 500,
    index: true,
  },
  password: {
    type: String,
  },
  OTP: {
    otp: Number,
    valid_till: Number,
    created_at: Number,
  },
  is_user_verified: {
    type: Boolean,
  },
});

const UserIdentificationSchema = mongoose.model('user_identification', userIdentificationSchema);
module.exports = UserIdentificationSchema;
