const express = require('express');
const { topicControllers } = require('../../controllers');

const getTopicRoutes = express.Router();

getTopicRoutes.get('/:id', topicControllers.getAllTopics);

module.exports = {
  getTopicRoutes,
};
