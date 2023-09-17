const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { topicValidation } = require('../../validations');
const { topicServices } = require('../../services');

const getAllTopics = async (req, res, next) => {
  try {
    const { courseId } = await topicValidation.getTopicsValidation.validateAsync({ courseId: req.params.id });
    const topics = await topicServices.getAllTopics({
      courseId,
    });
    return success.handler({ topics }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

const deleteTopic = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { topicId } = await topicValidation.topicIdValidation.validateAsync(
      { topicId: req.params.id },
    );
    const deletedTopic = await topicServices.deleteTopic({ topicId });
    if (!deletedTopic) {
      throw error.throwNotFound({ message: 'topic not found' });
    }
    return success.handler(
      { deletedTopic },
      req,
      res,
      next,
    );
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const createTopic = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      topicName,
      topicDescription,
      topicDuration,
      totalVideos,
      topicInfo,
      demoSrc,
      courseId,
    } = await topicValidation.addTopicValidation.validateAsync(req.body);
    const topic = await topicServices.createTopic(
      {
        topicName,
        topicDescription,
        topicDuration,
        totalVideos,
        topicInfo,
        demoSrc,
        courseId,
      },
      transaction,
    );
    return success.handler({ topic }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateTopic = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      topicName,
      topicDescription,
      topicDuration,
      totalVideos,
      topicInfo,
      demoSrc,
      courseId,
    } = await topicValidation.updateTopicValidation.validateAsync(req.body);
    const { topicId } = await topicValidation.topicIdValidation.validateAsync({
      topicId: req.params.id,
    });

    const updatedTopic = await topicServices.updateTopic({
      topicId,
      topicName,
      topicDescription,
      topicDuration,
      totalVideos,
      topicInfo,
      demoSrc,
      courseId,
    });
    return success.handler({ updatedTopic }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  deleteTopic,
  createTopic,
  updateTopic,
  getAllTopics,
};
