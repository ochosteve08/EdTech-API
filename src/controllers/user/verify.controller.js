const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { userServices } = require('../../services');
const {
  encryption, jwt, isOtpExpired, Transaction,
} = require('../../utils');
const { userValidation } = require('../../validations');
const { loginUser } = require('./login.controller');

const verifyMagicLink = async (req, res, next) => {
  try {
    const { id: userId } = req.user;
    // fetch user by userid from DB
    const user = await userServices.getUserByUserId({ userId });
    if (!user) {
      throw error.throwNotFound({ message: 'User' }, req, res, next);
    }
    // if you user found not update is_user_verified in user identification
    let id = user._doc._id;
    // encrypt a user id
    id = await encryption(id);
    // now fetch user info from indentification a model
    const userIdentity = await userServices.getUserByIdFromIdentification({ id });
    if (!userIdentity) {
      throw error.throwNotFound({ message: 'User' });
    }
    userIdentity.is_user_verified = true;
    await userIdentity.save();
    // create a token and send that token in headers
    const token = await jwt.createToken({ userId: user._doc._id });
    res.set('token', token);
    // redirect a user to frontent url
    return res.redirect('https://enseedling.com');
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const verifyOtp = async (req, res, next) => {
  try {
    const { email, otp } = await userValidation.userOTPVerificationValidations.validateAsync(req.body);
    // fetch user info by email
    const user = await userServices.getUserByEmail({ email });
    if (!user) {
      throw error.throwNotFound({ message: 'User' }, req, res, next);
    }
    let userId = user._doc._id;
    // encrypt id and fetch user identification\
    // encrypt a user id
    userId = await encryption(userId);
    // now fetch user info from indentification a model
    const userIdentity = await userServices.getUserByIdFromIdentification({ id: userId });
    if (!userIdentity) {
      throw error.throwNotFound({ message: 'User' });
    }
    // now validate otp
    const { isExpired, message } = await isOtpExpired({
      otp,
      createdAt: userIdentity.OTP.created_at,
      validTill: userIdentity.OTP.valid_till,
      generateOtp: userIdentity.OTP.otp,
    });
    if (isExpired) {
      throw error.throwTimeOut({ message }, req, res, next);
    }
    // create a token and send that token in headers
    const token = await jwt.createToken({ userId: user._doc._id });
    res.set('token', token);
    return success.handler({ user }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

// send verify link and otp again

const resendOTP = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { email } = await userValidation.userloginValidation.validateAsync(req.body);
    // login a user
    const message = await loginUser({ email }, transaction);
    return success.handler({ message }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  verifyMagicLink,
  verifyOtp,
  resendOTP,
};
