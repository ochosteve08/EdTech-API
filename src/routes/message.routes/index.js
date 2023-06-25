const express = require('express');
const { error } = require('@Enseedling/enseedling-lib-handler');
const messageRoutes = require('./message.routes');

const messagesRoutes = express.Router();

messagesRoutes.use(messageRoutes);

messagesRoutes.use('*', () => error.throwNotFound({ item: 'Route' }));

module.exports = messagesRoutes;
