const UserModel = require('./user.model');
const AddressModel = require('./address.model');
const AdminModel = require('./admin.model');
const AssignmentsModel = require('./assignment.model');
const assignmentFeedbackModel = require('./assignment.feedback.model');
const CourseAssignmentModel = require('./course.assignment.model');
const UserIdentificationSchema = require('./user_identification.model');
const ProjectModel = require('./project.model');
const CategoryModel = require('./category.model');
const PostedInternshipModel = require('./posted_internship.model');
const EnrolledCourseModel = require('./enrolledCourses.model');
const TopicModel = require('./topic.model');
const AppliedInternshipModel = require('./applied_internship.model');
const MessageModel = require('./message.model');
const ChapterModel = require('./chapter.model');
const ModuleModel = require('./module.model');
const TeacherModel = require('./teacher.model');
const TeacherRatingModel = require('./rating.teacher.model');
const CourseModel = require('./course.model');

module.exports = {
  UserModel,
  AddressModel,
  AdminModel,
  UserIdentificationSchema,
  ProjectModel,
  EnrolledCourseModel,
  CategoryModel,
  ChapterModel,
  CourseModel,
  TeacherModel,
  TeacherRatingModel,
  AppliedInternshipModel,
  PostedInternshipModel,
  AssignmentsModel,
  assignmentFeedbackModel,
  CourseAssignmentModel,
  MessageModel,
  TopicModel,
  ModuleModel,
};
