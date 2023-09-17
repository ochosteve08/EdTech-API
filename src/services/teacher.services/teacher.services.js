const { TeacherModel } = require('../../models');

// Fetching projects
const getTeacher = async ({ teacherId, teacherName }) => {
  const q = {};
  if (teacherId) {
    q._id = teacherId;
  }
  if (teacherName) {
    q.teacherName = teacherName;
  }
  return TeacherModel.find(q);
};
// Deleting project by projectId
const deleteTeacherById = async ({ teacherId }) => TeacherModel.findOneAndDelete({ _id: teacherId });

const createTeacher = async ({
  teacherName,
  email,
  contactNo,
  profilePic,
  description,
  qualification,
  documentCertificates,
  experience,
  designation,
  expertise,
  socialMedia,
}) => TeacherModel.create({
  teacherName,
  email,
  contactNo,
  profilePic,
  description,
  qualification,
  documentCertificates,
  experience,
  designation,
  expertise,
  socialMedia,
});

const updateTheTeacher = async ({
  teacherId,
  teacherName,
  email,
  contactNo,
  profilePic,
  description,
  qualification,
  documentCertificates,
  experience,
  designation,
  expertise,
  socialMedia,
}) => TeacherModel.findByIdAndUpdate(teacherId, {
  teacherName,
  email,
  contactNo,
  profilePic,
  description,
  qualification,
  documentCertificates,
  experience,
  designation,
  expertise,
  socialMedia,
}, { returnedDocument: 'after' });

module.exports = {
  createTeacher,
  updateTheTeacher,
  getTeacher,
  deleteTeacherById,
};
