const { CourseAssignmentModel, AssignmentsModel } = require('../../models');

const courseAssignmentExist = async ({ assignmentId: _id }) => {
  // filter for course ,  after course table
  const filter = { _id };
  const output = await AssignmentsModel.findOne(filter);
  return output;
};

const createCourseAssignment = async ({
  courseId,
  assignmentId,
  status,
  courseCompletion,
}, transaction) => {
  const CourseAssignment = new CourseAssignmentModel({
    courseId,
    assignmentId,
    status,
    courseCompletion,
  });
  const saveCourseAssignment = await CourseAssignment.save({ transaction });
  return saveCourseAssignment;
};

const getCourseAssignment = async ({
  _id,
  status,
  courseCompletion,
}) => {
  const query = {};
  if (_id) {
    query._id = _id;
  }
  if (status) {
    query.status = status;
  }
  if (courseCompletion !== undefined) {
    query.courseCompletion = courseCompletion;
  }
  return CourseAssignmentModel.find(query);
};

const updateTheCourseAssignment = async ({
  _id,
  courseId,
  assignmentId,
  status,
  courseCompletion,
}) => {
  const output = await CourseAssignmentModel.findByIdAndUpdate(_id, {
    courseId,
    assignmentId,
    status,
    courseCompletion,
  }, { new: true });

  return output;
};

const deleteCourseAssignment = async (courseAssignmentsId) => CourseAssignmentModel.findByIdAndDelete(courseAssignmentsId);

module.exports = {
  courseAssignmentExist,
  createCourseAssignment,
  getCourseAssignment,
  deleteCourseAssignment,
  updateTheCourseAssignment,
};
