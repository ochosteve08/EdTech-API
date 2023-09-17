const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { messageControllers } = require('../../controllers');

const messageRoutes = express.Router();

messageRoutes.post('/', authentication, messageControllers.sendMessage);
messageRoutes.get('/:messageId', authentication, messageControllers.getMessages);
messageRoutes.get('/:entityId', authentication, messageControllers.fetchMessageHistory);
messageRoutes.delete('/', authentication, messageControllers.deleteMessage);

module.exports = messageRoutes;
