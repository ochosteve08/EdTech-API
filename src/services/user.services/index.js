const {
  getUserByEmail,
  getUserByIdFromIdentification,
  createUser,
  createUserIdentification,
  getUserByUserId,
  getUserInfoByUserId,
  getCandidates,
  updateUserByID,
} = require('./user.services');

module.exports = {
  getUserByEmail,
  getUserByUserId,
  createUser,
  updateUserByID,
  createUserIdentification,
  getCandidates,
  getUserByIdFromIdentification,
  getUserInfoByUserId,
};
