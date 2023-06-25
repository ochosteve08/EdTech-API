const { userValidation } = require('./user.validations');
const { userloginValidation, userOTPVerificationValidations } = require('./login.user.validations');

module.exports = {
  userValidation,
  userloginValidation,
  userOTPVerificationValidations,
};
