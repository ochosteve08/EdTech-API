const express = require('express');
const { header: { authentication } } = require('@Enseedling/enseedling-lib-middlewares');
const { chapterControllers } = require('../../controllers');

const chapterRoutes = express.Router();

chapterRoutes.post('/add', authentication, chapterControllers.addChapter);
chapterRoutes.put('/:chapterId', authentication, chapterControllers.updateChapter);
chapterRoutes.get('/getChapters', authentication, chapterControllers.getChapter);
chapterRoutes.delete('/:chapterId', authentication, chapterControllers.deleteChapterById);

module.exports = chapterRoutes;
