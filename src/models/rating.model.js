const mongoose = require('mongoose');

const { Schema } = mongoose;

const ratingSchema = new Schema({
  courseId: {
    type: Schema.Types.ObjectId,
    ref: 'course',
    required: true,
  },
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  rating_value: {
    type: Number,
    required: true,
  },
  comments: {
    type: Array,
  },

}, {
  timestamps: true,
});

const RatingModel = mongoose.model('rating', ratingSchema);
module.exports = RatingModel;
