const { success, error } = require('@Enseedling/enseedling-lib-handler');
const {
  Transaction,
  jwt,
  dispatcher,
  encryption,
} = require('../../utils');
const { userValidation } = require('../../validations');
const { userServices } = require('../../services');

const registerUser = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    // step 1. take all params from user and validate them
    const { email, fullName } = await userValidation.userloginValidation.validateAsync(req.body);
    // now check user exist with email or not
    const user = await userServices.getUserByEmail({ email });
    if (user) {
      // now check user is_verified or not
      let userId = user._doc._id;
      // encrypt a user id
      userId = await encryption(userId);
      // now fetch user info from indentification a model
      const userIdentity = await userServices.getUserByIdFromIdentification({ id: userId });
      if (!userIdentity || !userIdentity.is_user_verified) {
        // save user identification
        const userIdentification = await userServices.createUserIdentification({
          id: userId,
          isUserVerified: false,
        }, transaction);
        if (!userIdentification) {
          throw error.throwPreconditionFailed({ message: 'Server Issue! failed to register a user' });
        }
        // create a token
        const token = await jwt.createToken({ userId: user._doc._id });
        // send a mail
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
        throw error.throwPreconditionFailed({ message: 'User exist already with same email' }, req, res, next);
      }
    } else {
      // create a user and their identification then send a mail for verification
      const addUser = await userServices.createUser({
        fullName,
        email,
      }, transaction);
      if (!addUser) {
        throw error.throwPreconditionFailed({ message: 'Server Issued! Failed to register a user' }, req, res, next);
      }
      // encrypt a user Id
      // now save user Identification
      let userId = user._doc._id;
      // encrypt a user id
      userId = await encryption(userId);
      const userIdentification = await userServices.createUserIdentification({
        id: userId,
        isUserVerified: false,
      }, transaction);
      if (!userIdentification) {
        throw error.throwPreconditionFailed({ message: 'Server Issue! failed to register a user' });
      }
      // create a token
      const token = await jwt.createToken({ userId: user._doc._id });
      // now send a mail
      // send a mail
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
    }
    // commit all changes
    await transaction.commitTransaction();
    return success.handler({ message: 'Verification Link send successfully' }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  registerUser,
};
