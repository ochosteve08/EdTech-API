const mongoose = require('mongoose');
// Define a schema
const { Schema } = mongoose;

const adminSchema = new Schema({
  fullName: {
    type: String,
    required: true,
    maxlength: 255,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    index: true,
    maxlength: 70,
  },
  contactNo: {
    type: Array,
    required: true,
    index: true,
    unique: true,
  },
  profilePic: {
    type: String,
    allowNull: false,
  },
  // role: {
  //   type: Schema.Types.ObjectId, ref: 'roles',
  // },
  aadharNo: {
    type: Number,
    unique: true,
    required: true,
  },
  aadharImgae: {
    type: String,
    allowNull: true,
  },
  panNo: {
    type: String,
    unique: true,
    required: true,
    minlength: 10,
    maxlength: 20,
  },
  panImage: {
    type: String,
    allowNull: true,
  },
  password: {
    type: String,
    required: true,
  },
  addressId: {
    type: Schema.Types.ObjectId, ref: 'addresses',
  },
  documents: {
    type: Array,
  },
}, {
  timestamps: true,
});

const AdminModel = mongoose.model('admin', adminSchema);
module.exports = AdminModel;
