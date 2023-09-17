const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const sendMessageValidation = Joi.object().keys({
  sender: enseedlingValidator._id.required().label('Sender'),
  receiver: enseedlingValidator._id.required().label('Receiver'),
  message: enseedlingValidator.generic.string.any.required().label('Message'),
  entityId: enseedlingValidator._id.required().label('Entity Id'),
  entityName: enseedlingValidator.generic.string.medium.required().label('Entity Name'),
  isRead: enseedlingValidator.generic.boolean.valid(true, false)
    .label('Is Read'),
});
const messageValidation = Joi.object().keys({
  messageId: enseedlingValidator._id.required().label('Message Id'),
});
const fetchMessageHistoryValidation = Joi.object().keys({ entityId: enseedlingValidator._id.required().label('Entity Id') });

module.exports = {
  sendMessageValidation,
  messageValidation,
  fetchMessageHistoryValidation,
};
