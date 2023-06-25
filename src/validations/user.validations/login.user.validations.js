const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const userloginValidation = Joi.object().keys({
  email: enseedlingValidator.email.required().label('Email'),
  fullName: enseedlingValidator.name.label('Full Name'),
});

const userOTPVerificationValidations = Joi.object().keys({
  email: enseedlingValidator.email.required().label('Email'),
  otp: enseedlingValidator.generic.number.positive.required().label('OTP'),
});

module.exports = {
  userloginValidation,
  userOTPVerificationValidations,
};
