const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { chapterValidation } = require('../../validations');
const { chapterServices } = require('../../services');

// fetching all available chapters

const addChapter = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      chapterName,
      moduleId,
      chapterDescription,
      videoSrc,
      duration,
      comments,
    } = await chapterValidation.createChapterValidation.validateAsync(req.body);

    const chapter = await chapterServices.createChapter({
      chapterName,
      moduleId,
      chapterDescription,
      videoSrc,
      duration,
      comments,
    });
    return success.handler({ chapter }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateChapter = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      chapterName,
      moduleId,
      chapterDescription,
      videoSrc,
      duration,
    } = await chapterValidation.updateChapterValidation.validateAsync(req.body);
    const { chapterId } = await chapterValidation.chapterIdValidation.validateAsync(req.params);
    const chapter = await chapterServices.updateTheChapter({
      chapterId,
      chapterName,
      moduleId,
      chapterDescription,
      videoSrc,
      duration,
    });
    return success.handler({ message: 'Chapter updated', chapter }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

// Delete by project id
const deleteChapterById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const id = await chapterValidation.chapterIdValidation.validateAsync(req.query.chapterId);
    console.log(id);
    // check user exits or not
    const chapter = await chapterServices.deleteChapterById({ id });
    if (!chapter) {
      throw error.throwNotFound({ message: 'Chapter' });
    }
    return success.handler({ message: 'Chapter has been successfully deleted.', chapter }, req, res, next);
    // return WriteResult({ nRemoved: 1 });
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};
const getChapter = async (req, res, next) => {
  try {
    const { chapterId, moduleId } = await chapterValidation.getChapterValidation.validateAsync(req.query);
    const chapters = await chapterServices.getChapter({ chapterId, moduleId });
    return success.handler(
      { chapters },
      req,

      res,

      next,
    );
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  addChapter,
  updateChapter,
  deleteChapterById,
  getChapter,
};
