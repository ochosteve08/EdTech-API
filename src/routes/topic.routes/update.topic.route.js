const express = require('express');
const { topicControllers } = require('../../controllers');

const updateTopicRoutes = express.Router();

updateTopicRoutes.put('/:id', topicControllers.updateTopic);

module.exports = {
  updateTopicRoutes,
};
