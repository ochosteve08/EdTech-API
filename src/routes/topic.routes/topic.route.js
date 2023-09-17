const express = require('express');
const {
  header: { authentication },
} = require('@Enseedling/enseedling-lib-middlewares');
const { topicControllers } = require('../../controllers');

const TopicRoute = express.Router();

TopicRoute.post('/', authentication, topicControllers.createTopic);
TopicRoute.delete('/:id', authentication, topicControllers.deleteTopic);
TopicRoute.get('/:id', authentication, topicControllers.getAllTopics);
TopicRoute.put('/:id', authentication, topicControllers.updateTopic);

module.exports = TopicRoute;
