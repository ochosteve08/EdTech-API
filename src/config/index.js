const environmentVariables = require('./env');
const { connectToMongoDb } = require('./mongodb.config');
const { configureSocket, getReceiverBySocket, getIo } = require('./socket.config');
const gcpClient = require('./gcp.config');

module.exports = {
  environmentVariables,
  connectToMongoDb,
  configureSocket,
  getReceiverBySocket,
  getIo,
  gcpClient,
};
