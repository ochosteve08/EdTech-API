const express = require('express');
const {
  header: { authentication },
} = require('@Enseedling/enseedling-lib-middlewares');
const { userControllers } = require('../../controllers');

const userRoute = express.Router();

userRoute.post('/register', userControllers.registerUser);
userRoute.post('/login', userControllers.userLogin);
userRoute.get('/user-info', authentication, userControllers.fetchUserInfo);
userRoute.put(
  '/user-info',
  authentication,
  userControllers.updateUserInfo,
);
userRoute.get(
  '/verify',
  authentication,
  userControllers.verifyMagicLink,
);
userRoute.post('/verify-otp', userControllers.verifyOtp);
userRoute.post('/resend-otp', userControllers.resendOTP);

module.exports = userRoute;
