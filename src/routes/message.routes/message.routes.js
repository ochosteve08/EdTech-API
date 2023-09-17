const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { messageControllers } = require('../../controllers');

const messageRoutes = express.Router();

messageRoutes.post('/send', authentication, messageControllers.sendMessage);
messageRoutes.get('/:messageId', authentication, messageControllers.getMessages);
messageRoutes.get('/:entity_id', authentication, messageControllers.fetchMessageHistory);
messageRoutes.delete('/:messageId', authentication, messageControllers.deleteMessage);

module.exports = messageRoutes;
