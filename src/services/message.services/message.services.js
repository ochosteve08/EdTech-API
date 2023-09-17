const { MessageModel } = require('../../models');

const sendMessage = async ({
  sender, receiver, message,
  entity_id, entity_name, is_read,
}) => {
  const addMessage = new MessageModel({
    sender,
    receiver,
    message,
    entity_id,
    entity_name,
    is_read,
  });
  const saveMessage = await addMessage.save();
  return saveMessage;
};
const getMessage = async ({ messageId }) => MessageModel.findById(messageId);

const fetchMessageHistory = async ({ entity_id }) => MessageModel.find({ entity_id }).exec();

const deleteMessage = async ({ messageId }) => MessageModel.findByIdAndDelete(messageId);

module.exports = {
  sendMessage,
  getMessage,
  fetchMessageHistory,
  deleteMessage,
};
