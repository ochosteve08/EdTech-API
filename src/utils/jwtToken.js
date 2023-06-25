const jwt = require('jsonwebtoken');
const { environmentVariables } = require('../config');

const createToken = async ({ userId }) => jwt.sign({ userId }, environmentVariables.JWT_SECRET_KEY, { expiresIn: '1800s' });
const verifyToken = async ({ token }) => jwt.verify(token, environmentVariables.JWT_SECRET_KEY);

module.exports = {
  createToken,
  verifyToken,
};
