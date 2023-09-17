const enseedlingValidator = require('@Enseedling/enseedling-validations');
const Joi = require('joi');

const userValidation = Joi.object().keys({
  fullName: enseedlingValidator.name.label('Full Name'),
  // email: enseedlingValidator.email.label('Email'),
  contactNo: Joi.array().items(enseedlingValidator.phoneNo).label('Contact Number'),
  profilePic: enseedlingValidator.generic.string.medium.label('Profile Pic'),
  skills: Joi.array().items(enseedlingValidator.generic.string.small).label('Skills'),
  resume: enseedlingValidator.generic.string.medium.label('Resume'),
  country: enseedlingValidator.generic.string.small.label('Country'),
  state: enseedlingValidator.generic.string.medium.label('State'),
  city: enseedlingValidator.generic.string.small.label('City'),
  district: enseedlingValidator.generic.string.small.label('District'),
  pincode: enseedlingValidator.generic.string.small.label('Pin Code'),
  landmark: enseedlingValidator.generic.string.any.label('Landmark'),
  street: enseedlingValidator.generic.string.medium.label('Street'),
  is_active: enseedlingValidator.generic.boolean.valid(true, false).label('Is Active').default(true),
  title: enseedlingValidator.generic.string.medium.label('Title'),
  preferences: Joi.array().items(enseedlingValidator.generic.string.small).label('Preferences'),
  documents: Joi.array().items(Joi.object().keys({
    documentName: enseedlingValidator.generic.string.small.required().label('Document Name'),
    document: enseedlingValidator.generic.string.small.required().label('Document'),
  })).label('Documents'),
  socialMedia: Joi.array().items(Joi.object().keys({
    mediaName: enseedlingValidator.generic.string.small.required().label('Media Name'),
    socialLink: enseedlingValidator.generic.string.small.required().label('Social Link'),
  })).label('Social Media'),
  experience: Joi.array().items(Joi.object().keys({
    companyName: enseedlingValidator.generic.string.small.required().label('Company Name'),
    roleDescription: enseedlingValidator.generic.string.small.required().label('Role Description'),
    role: enseedlingValidator.generic.string.small.required().label('Role'),
    employmentType: enseedlingValidator.generic.string.small.required().label('Employment Type'),
    fromDate: enseedlingValidator.generic.string.small.required().label('From Date'),
    toDate: enseedlingValidator.generic.string.small.required().label('To  Date'),
  })).label('Experience'),
  certificates: Joi.array().items(Joi.object().keys({
    certificateTitle: enseedlingValidator.generic.string.small.required().label('Certificate Title'),
    Organization: enseedlingValidator.generic.string.small.required().label('Organization'),
    fromDate: enseedlingValidator.generic.string.small.required().label('From Date'),
    toDate: enseedlingValidator.generic.string.small.required().label('To  Date'),
  })).label('Certificates'),
  qualification: Joi.array().items(Joi.object().keys({
    instituteName: enseedlingValidator.generic.string.small.required().label('Institute Name'),
    degree: enseedlingValidator.generic.string.small.required().label('degree'),
    fieldOfStudy: enseedlingValidator.generic.string.small.required().label('Field Of Study'),
    fromDate: enseedlingValidator.generic.string.small.required().label('From Date'),
    toDate: enseedlingValidator.generic.string.small.required().label('To  Date'),
  })).label('Qualification'),
});

module.exports = {
  userValidation,
};
