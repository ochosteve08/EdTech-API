const { CourseModel } = require('../../models');

const createCourse = async ({
  courseName,
  comments,
  courseDescription,
  courseDuration,
  courseRating,
  courseThumbImage,
  courseState,
  categoryIds,
  socialMediaLinks,
  totalVideos,
  startDate,
  endDate,
  capacity,
  status,
  createdBy,
  instructorId,
  demoVideoSrc,
  metaInfo,
}) => CourseModel.create({
  courseName,
  comments,
  courseDescription,
  courseDuration,
  courseRating,
  courseThumbImage,
  courseState,
  categoryIds,
  socialMediaLinks,
  totalVideos,
  startDate,
  endDate,
  capacity,
  status,
  createdBy,
  instructorId,
  demoVideoSrc,
  metaInfo,
});

const updateTheCourse = async ({
  courseId,
  courseName,
  // comments,
  courseDescription,
  courseDuration,
  courseRating,
  courseThumbImage,
  courseState,
  categoryIds,
  socialMediaLinks,
  totalVideos,
  startDate,
  endDate,
  capacity,
  status,
  createdBy,
  instructorId,
  demoVideoSrc,
  metaInfo,
}) => CourseModel.findByIdAndUpdate(courseId, {
  courseName,
  // comments,
  courseDescription,
  courseDuration,
  courseRating,
  courseThumbImage,
  courseState,
  categoryIds,
  socialMediaLinks,
  totalVideos,
  startDate,
  endDate,
  capacity,
  status,
  createdBy,
  instructorId,
  demoVideoSrc,
  metaInfo,
}, { returnedDocument: 'after' });

const getCourses = async ({ courseId, courseName, categoryIds }) => {
  const filter = {};
  if (courseId) {
    filter._id = courseId;
  }
  if (courseName) {
    filter.courseName = courseName;
  }
  if (categoryIds) {
    filter.categoryIds = { $in: categoryIds };
  }
  return CourseModel.find(filter);
};
const deleteCourseById = async ({ id }) => CourseModel.findOneAndDelete({ id });

module.exports = {
  getCourses,
  createCourse,
  updateTheCourse,
  deleteCourseById,
};
