const { PostedInternshipModel, AppliedInternshipModel, UserModel } = require('../../models');

const getUserId = async (id) => {
  const userId = await UserModel.findById({ _id: id });
  return userId;
};
// Get posted internship by ID
const getPostedInternshipById = async (id) => {
  const postedInternship = await PostedInternshipModel.findOne({ _id: id });
  return postedInternship;
};

// // Get applied internship by ID
// const getAppliedInternships = async (id) => {
//   const appliedInternship = await AppliedInternshipModel.findOne({ _id: id });
//   return appliedInternship;
// };

// Apply internship
const applyInternship = async (
  {
    userId,
    internshipId,
    selectionStatus,
    additionalInformation,
  },
  transaction,
) => {
  const appliedInternship = new AppliedInternshipModel({

    userId,
    internshipId,
    selectionStatus,
    additionalInformation,
  });

  const savedInternship = await appliedInternship.save({ session: transaction });

  return savedInternship;
};

// Delete applied internship
const deleteInternship = async (id, transaction) => {
  const deletedInternship = await AppliedInternshipModel.findByIdAndDelete(id, { session: transaction });
  return deletedInternship;
};
// Get all applied internships
const getAppliedInternships = async () => {
  const appliedInternships = await AppliedInternshipModel.find();
  return appliedInternships;
};

module.exports = {
  applyInternship, deleteInternship, getPostedInternshipById, getAppliedInternships, getUserId,

};
