const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { userControllers } = require('../../controllers');

const verifyUserRoutes = express.Router();

verifyUserRoutes.get('/verify', authentication, userControllers.verifyMagicLink);
verifyUserRoutes.post('/verify-otp', userControllers.verifyOtp);
verifyUserRoutes.post('/resend-otp', userControllers.resendOTP);

module.exports = {
  verifyUserRoutes,
};
