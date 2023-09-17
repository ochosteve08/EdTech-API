const { ChapterModel } = require('../../models');

// Fetching projects
const getChapter = async ({ chapterId, moduleId }) => {
  const q = {};
  if (chapterId) {
    q._id = chapterId;
  }
  if (moduleId) {
    q.moduleId = moduleId;
  }

  return ChapterModel.find(q);
};
// Deleting chapter by chapterId
const deleteChapterById = async ({ chapterId }) => ChapterModel.findOneAndDelete({ _id: chapterId });

// creating chapter
const createChapter = async ({
  chapterName,
  moduleId,
  chapterDescription,
  videoSrc,
  duration,
  comments,
}) => ChapterModel.create({
  chapterName,
  moduleId,
  chapterDescription,
  videoSrc,
  duration,
  comments,
});

// updating chapter by chapterId
const updateTheChapter = async ({
  chapterId,
  chapterName,
  moduleId,
  chapterDescription,
  videoSrc,
  duration,
}) => ChapterModel.findByIdAndUpdate(chapterId, {
  chapterName,
  moduleId,
  chapterDescription,
  videoSrc,
  duration,
}, { returnedDocument: 'after' });

module.exports = {
  createChapter,
  updateTheChapter,
  getChapter,
  deleteChapterById,
};
