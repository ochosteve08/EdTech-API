const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { courseValidation } = require('../../validations');
const { courseServices } = require('../../services');

const createCourse = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
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
    } = await courseValidation.addCourseValidation.validateAsync(req.body);
    const course = await courseServices.createCourse({
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
    }, transaction);
    return success.handler({ course }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};
// Update course by Id
const updateCourse = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
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
    } = await courseValidation.updateCourseValidation.validateAsync(req.body);
    const { courseId } = await courseValidation.courseIdValidation.validateAsync(req.params);
    const course = await courseServices.updateTheCourse({
      courseId,
      courseName,
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
    return success.handler({ message: 'course updated', course }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const findCourses = async (req, res, next) => {
  try {
    const { courseId, courseName, categoryIds } = await courseValidation.getCoursesValidation.validateAsync(req.query);
    /**
         * pass query parameters to service to filter data
         */
    const courses = await courseServices.getCourses({
      courseId,
      courseName,
      categoryIds,
    });
    return success.handler({ courses }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

// Delete by course id
const deleteCourseById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const id = await courseValidation.courseIdValidation.validateAsync(req.params.id);
    // check user exits or not
    const course = await courseServices.deleteCourseById({ id });
    if (!course) {
      throw error.throwNotFound({ message: 'Course' });
    }
    return success.handler({
      message: 'Course has been successfully deleted.',
      course,
    }, req, res, next);
    // return WriteResult({ nRemoved: 1 });
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  findCourses,
  updateCourse,
  createCourse,
  deleteCourseById,
};
