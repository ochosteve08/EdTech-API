const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { internshipService } = require('../../services');
const { internshipValidation } = require('../../validations');
const { Transaction } = require('../../utils');

const applyInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      userId,
      internshipId,
      selectionStatus,
      additionalInformation,
    } = await internshipValidation.appliedInternshipValidation.validateAsync(req.body);

    // Call the applyInternship service to apply for the internship
    const Internship = await internshipService.applyInternship({
      userId,
      internshipId,
      selectionStatus,
      additionalInformation,
    });

    return success.handler({ Internship }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  }
};
const deleteInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { internshipId } = await internshipValidation.deleteInternshipValidation.validateAsync(req.body);

    // Call the deleteInternship service to delete the applied internship
    const deletedInternship = await internshipService.deleteInternship(internshipId);
    if (!deletedInternship) {
      return success.handler({ message: 'Internship not found' }, req, res, next);
    }
    return success.handler({ message: 'Applied internship deleted successfully' }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  }
};

const getAppliedInternships = async (req, res, next) => {
  try {
    // Call the getAppliedInternships service to retrieve all applied internships
    const appliedInternships = await internshipService.getAppliedInternships();

    return success.handler({ appliedInternships }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};

module.exports = {
  applyInternship, deleteInternship, getAppliedInternships,
};
