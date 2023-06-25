const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const createTeacherValidation = Joi.object().keys({
  teacherName: enseedlingValidator.name.label('Teacher Full Name'),
  email: enseedlingValidator.email.label('Email'),
  contactNo: Joi.string().label('Contact Number'),
  profilePic: enseedlingValidator.generic.string.medium.label('Profile Pic'),
  description: enseedlingValidator.generic.string.medium.label('Description'),
  qualification: Joi.array().items(Joi.object().keys({
    instituteName: enseedlingValidator.generic.string.small.required().label('Institute Name'),
    degree: enseedlingValidator.generic.string.small.label('degree'),
    fieldOfStudy: enseedlingValidator.generic.string.small.label('Field Of Study'),
    fromDate: enseedlingValidator.generic.string.small.label('From Date'),
    toDate: enseedlingValidator.generic.string.small.label('To  Date'),
  })).label('Qualification'),
  document_certificates: Joi.array().items(Joi.object().keys({
    documentName: enseedlingValidator.generic.string.small.label('Document Certificate Name'),
    document: enseedlingValidator.generic.string.small.label('Document'),
  })).label('Documents'),
  experience: Joi.array().items(Joi.object().keys({
    companyName: enseedlingValidator.generic.string.small.label('Company Name'),
    roleDescription: enseedlingValidator.generic.string.small.label('Role Description'),
    role: enseedlingValidator.generic.string.small.label('Role'),
    employmentType: enseedlingValidator.generic.string.small.label('Employment Type'),
    fromDate: enseedlingValidator.generic.string.small.label('From Date'),
    toDate: enseedlingValidator.generic.string.small.label('To  Date'),
  })).label('Experience'),
  designation: enseedlingValidator.generic.string.small.label('Designation'),
  expertise: enseedlingValidator.generic.string.small.label('Expertise'),
  isActive: enseedlingValidator.generic.boolean.valid(true, false).label('Is Active').default(true),
  socialMedia: Joi.array().items(Joi.object().keys({
    mediaName: enseedlingValidator.generic.string.small.required().label('Media Name'),
    socialLink: enseedlingValidator.generic.string.small.required().label('Social Link'),
  })).label('Social Media'),

});

// update teacher validation
const updateTeacherValidation = Joi.object().keys({
  teacherName: enseedlingValidator.name.label('Teacher Full Name'),
  email: enseedlingValidator.email.label('Email'),
  contactNo: enseedlingValidator.generic.string.small.label('Contact Number'),
  profilePic: enseedlingValidator.generic.string.medium.label('Profile Pic'),
  description: enseedlingValidator.generic.string.medium.label('Description'),
  qualification: Joi.array().items(Joi.object().keys({
    instituteName: enseedlingValidator.generic.string.small.required().label('Institute Name'),
    degree: enseedlingValidator.generic.string.small.label('degree'),
    fieldOfStudy: enseedlingValidator.generic.string.small.label('Field Of Study'),
    fromDate: enseedlingValidator.generic.string.small.label('From Date'),
    toDate: enseedlingValidator.generic.string.small.label('To  Date'),
  })).label('Qualification'),
  document_certificates: Joi.array().items(Joi.object().keys({
    documentName: enseedlingValidator.generic.string.small.label('Document Certificate Name'),
    document: enseedlingValidator.generic.string.small.label('Document'),
  })).label('Documents'),
  experience: Joi.array().items(Joi.object().keys({
    companyName: enseedlingValidator.generic.string.small.label('Company Name'),
    roleDescription: enseedlingValidator.generic.string.small.label('Role Description'),
    role: enseedlingValidator.generic.string.small.label('Role'),
    employmentType: enseedlingValidator.generic.string.small.label('Employment Type'),
    fromDate: enseedlingValidator.generic.string.small.label('From Date'),
    toDate: enseedlingValidator.generic.string.small.label('To  Date'),
  })).label('Experience'),
  designation: enseedlingValidator.generic.string.small.label('Designation'),
  expertise: enseedlingValidator.generic.string.small.label('Expertise'),
  isActive: enseedlingValidator.generic.boolean.valid(true, false).label('Is Active').default(true),
  socialMedia: Joi.array().items(Joi.object().keys({
    mediaName: enseedlingValidator.generic.string.small.required().label('Media Name'),
    socialLink: enseedlingValidator.generic.string.small.required().label('Social Link'),
  })).label('Social Media'),

});
// Get teacher
const getTeacherValidation = Joi.object().keys({
  teacherId: enseedlingValidator._id.label('Teacher Id'),
  teacherName: enseedlingValidator.generic.string.medium.label('Teacher Name'),
  categoryIds: Joi.array()
    .items(enseedlingValidator._id)
    .label('Category Ids'),
  isActive: Joi.boolean().label('Is Active'),
});
const deleteTeacherValidation = Joi.object().keys({
  teacherId: enseedlingValidator._id.required().label('Teacher Id'),
});
module.exports = {
  createTeacherValidation,
  updateTeacherValidation,
  getTeacherValidation,
  deleteTeacherValidation,
};
