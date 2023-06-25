const { TopicModel } = require('../../models');

// if course exist, create topic
const createTopic = async ({
  topicName,
  topicDescription,
  topicDuration,
  totalVideos,
  topicInfo,
  demoSrc,
  courseId,
}) => TopicModel.create({
  topicName,
  topicDescription,
  topicDuration,
  totalVideos,
  topicInfo,
  demoSrc,
  courseId,
});

// find all topic by course id
const getAllTopics = async ({ courseId }) => TopicModel.find({ courseId });

// update all fields
const updateTopic = async ({
  topicId,
  topicName,
  topicDescription,
  topicDuration,
  totalVideos,
  topicInfo,
  demoSrc,
  courseId,
}) => TopicModel.findByIdAndUpdate(
  topicId,
  {
    topicName,
    topicDescription,
    topicDuration,
    totalVideos,
    topicInfo,
    demoSrc,
    courseId,
  },
  { new: true },
);

// delete topic
const deleteTopic = async ({ topicId }) => TopicModel.findOneAndDelete({ _id: topicId });

module.exports = {
  createTopic,
  deleteTopic,
  getAllTopics,
  updateTopic,
};
