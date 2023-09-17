const { MessageModel } = require('../../models');

const sendMessage = async ({
  sender,
  receiver,
  message,
  entityId,
  entityName,
  isRead,
}) => {
  const addMessage = new MessageModel({
    sender,
    receiver,
    message,
    entityId,
    entityName,
    isRead,
  });
  const saveMessage = await addMessage.save();
  return saveMessage;
};
const getMessage = async ({ messageId }) => MessageModel.findById(messageId);

const fetchMessageHistory = async ({ entityId }) => MessageModel.find({ entityId }).exec();

const deleteMessage = async ({ messageId }) => MessageModel.findByIdAndDelete(messageId);

module.exports = {
  sendMessage,
  getMessage,
  fetchMessageHistory,
  deleteMessage,
};
