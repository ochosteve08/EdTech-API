const mongoose = require('mongoose');
const { UserModel, UserIdentificationSchema } = require('../../models');

const getUserByEmail = async ({ email }) => UserModel.findOne({ email });

const getUserByIdFromIdentification = async ({ id }) => UserIdentificationSchema.findOne({ id });

// create user
const createUser = async ({ fullName, email }, transaction) => {
  const addUser = new UserModel({
    fullName,
    email,
  });
  const saveUser = await addUser.save({ transaction });
  return saveUser;
};

// create user identification
const createUserIdentification = async ({ isUserVerified, id }, transaction) => {
  const addUserIdentification = new UserIdentificationSchema({
    is_user_verified: isUserVerified,
    id,
  });
  const saveUserIdentification = await addUserIdentification.save({ transaction });
  return saveUserIdentification;
};

// get user by userId
const getUserByUserId = async ({ userId }) => UserModel.findById(userId).populate('addressId');

// get user by userId
// also fetch top 10 students

const getUserInfoByUserId = async ({ userId }) => UserModel.aggregate([
  {
    $match: {
      _id: mongoose.Types.ObjectId(userId),
    },
  },
  {
    $lookup: {
      from: 'addresses',
      localField: '_id',
      foreignField: 'userId',
      as: 'address',
    },
  },
  {
    $lookup: {
      from: 'projects',
      localField: '_id',
      foreignField: 'userId',
      as: 'projects',
    },
  },
  {
    $lookup: {
      from: 'user_assignments',
      localField: '_id',
      foreignField: 'userId',
      as: 'assignments',
    },
  },
  {
    $lookup: {
      from: 'enrolled_courses',
      localField: '_id',
      foreignField: 'userId',
      as: 'enrolled_courses',
    },
  },
]);

// service to fetch top students whose done maximum no of assignments
const getCandidates = async () => UserModel.aggregate([
  {
    $lookup: {
      from: 'user_assignments', // The name of the collection you want to join
      localField: '_id', // The field in the Candidate collection to join on
      foreignField: 'userId', // The field in the Assignment collection to join on
      as: 'assignments', // The name of the field to store the joined documents
    },
  },
  {
    $addFields: {
      assignmentCount: { $size: '$assignments' }, // Add a field to store the count of assignments
    },
  },
  {
    $sort: {
      assignmentCount: -1, // Sort candidates based on assignment count in descending order
    },
  },
  {
    $limit: 10, // Retrieve only the top 10 candidates
  },
]);

// update user by user ID
const updateUserByID = async ({
  fullName,
  userId,
  qualification,
  certificates,
  experience,
  socialMedia,
  skills,
  documents,
  title,
  lastLogin,
  preferences,
  isActive,
  resume,
  profilePic,
  contactNo,
  street,
  landmark,
  pincode,
  district,
  country,
  city,
  state,
}) => UserModel.findOneAndUpdate({ _id: userId }, {
  fullName,
  qualification,
  certificates,
  experience,
  socialMedia,
  skills,
  documents,
  title,
  last_login: lastLogin,
  preferences,
  is_active: isActive,
  resume,
  profilePic,
  contactNo,
  street,
  landmark,
  pincode,
  district,
  country,
  city,
  state,
}, { new: true });

module.exports = {
  getUserByEmail,
  updateUserByID,
  createUserIdentification,
  getUserByIdFromIdentification,
  createUser,
  getUserByUserId,
  getCandidates,
  getUserInfoByUserId,
};
