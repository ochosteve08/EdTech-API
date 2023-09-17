const express = require('express');
const { topicControllers } = require('../../controllers');

const createTopicRoutes = express.Router();

createTopicRoutes.post('/', topicControllers.createTopic);

module.exports = { createTopicRoutes };
