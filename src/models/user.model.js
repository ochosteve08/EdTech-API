const mongoose = require('mongoose');
// Define a schema
const { Schema } = mongoose;
// remove location from address object

const userSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    maxlength: 50,
  },
  contactNo: {
    type: Number,
  },
  addressId: { type: Schema.Types.ObjectId, ref: 'address' },
  profilePic: {
    type: String,
  },
  skills: {
    type: Array,
  },
  qualification: {
    type: Array,
  },
  certificates: {
    type: Array,
  },
  experience: {
    type: Array,
  },
  resume: {
    type: String,
  },
  is_active: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  preferences: {
    type: Array,
  },
  last_login: {
    type: String,
  },
  social_media: {
    type: Array,
  },
  documents: {
    type: Array,
  },
}, {
  timestamps: true,
});

const UserModel = mongoose.model('user', userSchema);
module.exports = UserModel;
