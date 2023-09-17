const { success, error } = require('@Enseedling/enseedling-lib-handler');
const {
  Transaction,
  encryption, generateOTP,
  dispatcher, jwt,
} = require('../../utils');
const { userValidation } = require('../../validations');
const { userServices } = require('../../services');
const { OTP } = require('../../const');

const loginUser = async ({ email }, transaction) => {
  let message;
  const user = await userServices.getUserByEmail({ email });
  if (!user) {
    throw error.throwNotFound({ message: 'User' });
  }
  // now check user is_verified or not
  let userId = user._id;
  // encrypt a user id
  userId = await encryption(userId);
  // now fetch user info from indentification a model
  const userIdentity = await userServices.getUserByIdFromIdentification({ id: userId });
  if (!userIdentity) {
    throw error.throwNotFound({ message: 'User' });
  }
  if (!userIdentity.is_user_verified) {
    // send verification link to verify a user
    // create a token
    const token = await jwt.createToken({ userId: user._doc._id });
    message = 'Verification link sent sucessfully';
    await dispatcher({
      payload: {
        type: 'REGISTRATION_MAIL',
        body: {
          to: [{ email }],
          name: user.fullName,
          token,
        },
      },
    });
  } else {
  // now create an OTP
    const otp = await generateOTP();
    userIdentity.OTP = {
      otp,
      valid_till: OTP.validTill,
      created_at: Date.now(),
    };
    message = 'OTP sent successfully';
    // send otp over mail
    await dispatcher({
      payload: {
        type: 'LOGIN_OTP',
        body: {
          to: [{ email: user.email }],
          name: user.fullName,
          otp,
        },
      },
    });
    // now save otp into db
    await userIdentity.save({ transaction });
  }
  return message;
};

const userLogin = async (req, res, next) => {
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
  userLogin,
  loginUser,
};
