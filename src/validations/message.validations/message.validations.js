const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const sendMessageValidation = Joi.object().keys({
  sender: enseedlingValidator._id.required().label('Sender'),
  receiver: enseedlingValidator._id.required().label('Receiver'),
  message: enseedlingValidator.generic.string.any.required().label('Message'),
  entity_id: enseedlingValidator._id.required().label('Entity Id'),
  entity_name: enseedlingValidator.generic.string.medium.required().label('Entity Name'),
  is_read: enseedlingValidator.generic.boolean.valid(true, false)
    .label('Is Read'),
});
const messageValidation = Joi.object().keys({
  messageId: enseedlingValidator._id.required().label('Message Id'),
});
const fetchMessageHistoryValidation = Joi.object().keys({ entity_id: enseedlingValidator._id.required().label('Entity Id') });

module.exports = {
  sendMessageValidation,
  messageValidation,
  fetchMessageHistoryValidation,
};
