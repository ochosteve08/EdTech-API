const mongoose = require('mongoose');
// Define a schema
const { Schema } = mongoose;

const teacherSchema = new Schema({
  teacherName: {
    type: String,
    required: true,
    trim: true,
    minlength: 5,
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
  description: {
    type: String,
  },
  qualification: {
    type: Array,
  },
  documentCertificates: {
    type: Array,
  },
  experience: {
    type: Array,
  },
  designation: {
    type: String,
  },
  expertise: {
    type: String,
  },
  isActive: {
    type: Boolean,
  },
  lastLogin: {
    type: String,
  },
  socialMedia: {
    type: Array,
  },
}, {
  timestamps: true,
});

const TeacherModel = mongoose.model('teacher', teacherSchema);
module.exports = TeacherModel;
