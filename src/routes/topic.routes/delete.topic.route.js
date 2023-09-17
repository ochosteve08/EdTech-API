const express = require('express');
const { topicControllers } = require('../../controllers');

const deleteTopicRoutes = express.Router();
deleteTopicRoutes.delete('/:id', topicControllers.deleteTopic);

module.exports = {
  deleteTopicRoutes,
};
