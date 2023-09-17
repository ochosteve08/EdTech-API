function generateOTP() {
  const length = 6;
  const digits = '0123456789';
  let otp = '';

  for (let i = 0; i < length; i += 1) {
    otp += digits[Math.floor(Math.random() * 10)];
  }
  return otp;
}

const isOtpExpired = async ({
  otp,
  createdAt,
  validTill,
  generateOtp,
}) => {
  const generatedTimestamp = Date.now();
  const timeDifferenceInMinutes = Math.floor((generatedTimestamp - createdAt) / 60000);
  if (otp !== generateOtp) {
    return {
      isExpired: true,
      message: 'Incorrect Otp',
    };
  }
  if (otp === generateOtp && timeDifferenceInMinutes <= validTill && timeDifferenceInMinutes >= 0) {
    return {
      isExpired: false,
      message: '',
    };
  }
  return {
    isExpired: true,
    message: 'OTP expired',
  };
};

module.exports = {
  generateOTP,
  isOtpExpired,
};
