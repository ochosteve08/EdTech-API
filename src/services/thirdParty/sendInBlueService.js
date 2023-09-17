// eslint-disable-next-line import/no-extraneous-dependencies
const sibApiV3Sdk = require('sib-api-v3-sdk');
const { environmentVariables } = require('../../config');

const defaultClient = sibApiV3Sdk.ApiClient.instance;

// Configure API key authorization: api-key
const apiKey = defaultClient.authentications['api-key'];
apiKey.apiKey = environmentVariables.SEND_IN_BLUE_API;

// Uncomment below two lines to configure authorization using: partner-key
// var partnerKey = defaultClient.authentications['partner-key'];
// partnerKey.apiKey = 'YOUR API KEY';

const apiInstance = new sibApiV3Sdk.TransactionalEmailsApi();
const sendEmail = async ({
  subject,
  receiver,
  textContent,
  htmlContent,
}) => {
  const sendSmtpEmail = {
    sender: { name: 'Enseedling', email: 'rohit.singh@enseedling.com' },
    to: receiver,
    subject,
    textContent,
    htmlContent,
  };

  try {
    const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
    console.log('Email sent successfully:', response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = {
  sendEmail,
};
