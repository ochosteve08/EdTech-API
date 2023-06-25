const mongoose = require('mongoose');

const { Schema } = mongoose;

const AddressSchema = new Schema({
  location: {
    type: {
      type: String,
      default: 'Point',
    },
    coordinates: {
      // AT index 0 will be longitude and At index 1 will be latitude
      type: [Number],
    },
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    allowNull: true,
  },
  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    allowNull: true,
  },
  street: {
    type: String,
    allowNull: true,
  },
  landmark: {
    type: String,
    allowNull: true,
  },
  address: {
    type: String,
  },
}, {
  timestamps: true,
});

const AddressModel = mongoose.model('address', AddressSchema);
module.exports = AddressModel;
