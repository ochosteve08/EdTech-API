const mongoose = require('mongoose');

const { Schema } = mongoose;

const appliedInternshipSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
    internshipId: {
      type: Schema.Types.ObjectId,
      ref: 'PostedInternship',
      required: true,
    },
    selectionStatus: {
      type: String,
      enum: ['Hired', 'Rejected', 'Shortlisted', 'pending'],
      default: 'Pending',
    },
    additionalInformation: {
      type: String,
    },

  },
  {
    timestamps: true,
  },
);

const AppliedInternshipModel = mongoose.model('AppliedInternship', appliedInternshipSchema);

module.exports = AppliedInternshipModel;
