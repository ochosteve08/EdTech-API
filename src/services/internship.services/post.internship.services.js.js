const { PostedInternshipModel } = require('../../models');

const getAllInternship = async () => PostedInternshipModel.find();

const getInternshipById = async ({ id }) => PostedInternshipModel.findById({ id });

const removePostInternship = async ({ id }) => PostedInternshipModel.deleteOne({ id });

const createInternship = async ({
  categoryId, internshipTitle, internshipDescription, internshipType, salary, skills, responsibilities, internshipEndDate,
  numberOfOpenings, internshipLocation, experienceLevel,
}, transaction) => {
  const addInternship = new PostedInternshipModel({
    categoryId,
    internshipTitle,
    internshipDescription,
    internshipType,
    salary,
    skills,
    responsibilities,
    internshipEndDate,
    numberOfOpenings,
    internshipLocation,
    experienceLevel,
  });

  const saveInternship = await addInternship.save(transaction);
  return saveInternship;
};

module.exports = {
  createInternship, getAllInternship, getInternshipById, removePostInternship,
};
