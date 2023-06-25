const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { userServices } = require('../../services');
const { userValidation } = require('../../validations');
const { encryption } = require('../../utils');

const fetchUserInfo = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    // fetch user by userId
    const user = await userServices.getUserByUserId({ userId });
    if (!user) {
      throw error.throwNotFound({ message: 'User' });
    }
    // now check user verified or not if user are not verified no need to fetch info
    const encryptedId = await encryption(userId);
    // now fetch user info from identification a model
    const userIdentity = await userServices.getUserByIdFromIdentification({ id: encryptedId });
    if (!userIdentity) {
      throw error.throwNotFound({ message: 'User' });
    }
    if (!userIdentity.is_user_verified) {
      throw error.throwPreconditionFailed({ message: 'User is not verified;' });
    }
    // now fetch userInfo as well as dashboard info
    const [userInfo] = await userServices.getUserInfoByUserId({ userId });
    const [topCandidates] = await userServices.getCandidates();
    // add top candidates into userInfo
    userInfo.topCandidates = topCandidates;
    return success.handler({ userInfo }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const updateUserInfo = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    // 1. validate your info
    const {
      fullName,
      qualification,
      certificates,
      experience,
      socialMedia,
      skills,
      documents,
      title,
      preferences,
      is_active: isActive, resume, profilePic, contactNo,
      street, landmark, pincode,
      district, country, city, state,
    } = await userValidation.userValidation.validateAsync(req.body);
    // 2. now update whatever field sent by user
    const updatedUser = await userServices.updateUserByID({
      fullName,
      userId,
      qualification,
      certificates,
      experience,
      socialMedia,
      skills,
      documents,
      title,
      lastLogin: Date.now(),
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
    });
    if (!updatedUser) {
      throw error.throwPreconditionFailed({ message: 'Failed to update user' });
    }
    return success.handler({ user: updatedUser }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  fetchUserInfo,
  updateUserInfo,
};
