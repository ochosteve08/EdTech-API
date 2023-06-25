const { AssignmentsModel } = require('../../models');

const createAssignment = async ({
  title,
  description,
  requirements,
  isActive,
  category,
  topics,
  createdBy,
  difficultyLevel,
  deadline,
  marks,
}, transaction) => {
  const Assignment = new AssignmentsModel({
    title,
    description,
    requirements,
    isActive,
    category,
    topics,
    createdBy,
    difficultyLevel,
    deadline,
    marks,
  });
  const saveAssignment = await Assignment.save({ transaction });
  return saveAssignment;
};

const getAssignments = async ({
  _id, title, category, isActive, difficultyLevel, marks,
}) => {
  const query = {};
  if (_id) {
    query._id = _id;
  }
  if (title) {
    query.title = title;
  }
  if (isActive !== undefined) {
    query.isActive = isActive;
  }
  if (difficultyLevel) {
    query.difficultyLevel = difficultyLevel;
  }
  if (category && category.length > 0) {
    query.category = { $in: category };
  }
  if (marks) {
    query.marks = marks;
  }
  return AssignmentsModel.find(query);
};

const updateTheAssignment = async ({
  assignmentId,
  title,
  description,
  requirements,
  isActive,
  category,
  topics,
  createdBy,
  difficultyLevel,
  deadline,
  marks,
}) => AssignmentsModel.findByIdAndUpdate(assignmentId, {
  title,
  description,
  requirements,
  isActive,
  category,
  topics,
  createdBy,
  difficultyLevel,
  deadline,
  marks,
}, { new: true });

const deleteAssignment = async (AssignmentID) => {
  const deletedAssignment = await AssignmentsModel.findByIdAndDelete(AssignmentID);
  return deletedAssignment;
};

module.exports = {
  createAssignment,
  getAssignments,
  deleteAssignment,
  updateTheAssignment,
};
