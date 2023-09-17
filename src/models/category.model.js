const mongoose = require('mongoose');

const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
    categoryDescription: {
      type: String,
    },
    categoryVersion: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

const CategoryModel = mongoose.model('category', categorySchema);
module.exports = CategoryModel;
