const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { messageServices } = require('../../services');
const { messagesValidation } = require('../../validations');
const { getReceiverBySocket, getIo } = require('../../config');

const sendMessage = async (req, res, next) => {
  try {
    const {
      sender,
      receiver,
      message,
      entityId,
      entityName,
      isRead,
    } = await messagesValidation.sendMessageValidation.validateAsync(req.body);

    // Save the message to the database and return data
    const newMessage = await messageServices.sendMessage({
      sender,
      receiver,
      message,
      entityId,
      entityName,
      isRead,
    });

    const io = getIo();
    const socketId = getReceiverBySocket(receiver);

    if (socketId) {
      // Emit the 'message' event to the socket associated with the receiver
      io.to(socketId).emit('message', { sender, message });
    }

    return success.handler({ newMessage }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
const getMessages = async (req, res, next) => {
  try {
    const { messageId } = await messagesValidation.messageValidation.validateAsync(req.params);
    // Retrieve a single message by its ID from the database
    const message = await messageServices.getMessage(messageId);

    if (!message) {
      throw error.throwNotFound({ message: 'Message' });
    }
    return success.handler({ message }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
const fetchMessageHistory = async (req, res, next) => {
  try {
    const { entityId } = await messagesValidation.fetchMessageHistoryValidation
      .validateAsync(req.params);

    // Fetch message history from the database
    const message = await messageServices.fetchMessageHistory(entityId);
    return success.handler({ message }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
const deleteMessage = async (req, res, next) => {
  try {
    const { messageId } = await messagesValidation.messageValidation.validateAsync(req.params);
    console.log(messageId);
    // Delete the message from the database
    const deletedMessage = await messageServices.deleteMessage(messageId);
    console.log(deletedMessage);
    return success.handler({ message: deletedMessage }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  sendMessage,
  getMessages,
  fetchMessageHistory,
  deleteMessage,
};
