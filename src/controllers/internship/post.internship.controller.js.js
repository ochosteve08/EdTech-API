const { error, success } = require('@Enseedling/enseedling-lib-handler');
const { internshipValidation } = require('../../validations');
const { internshipServices } = require('../../services');
const { Transaction } = require('../../utils');

const addInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
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
    } = await internshipValidation.postedInternshipValidation.validateAsync(req.body);
    // Insert into DB
    const message = await internshipServices.createInternship({
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

    }, transaction);
    return success.handler({ message }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const findInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const message = await internshipServices.getAllInternship();
    return success.handler({ message }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const removeInternship = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { internshipId } = await internshipValidation.deleteInternshipValidation.validateAsync(
      req.params,
    );
    const deleteInternship = await internshipServices.removePostInternship(
      { internshipId },
      transaction,
    );
    if (!deleteInternship) {
      throw error.throwNotFound({ message: 'Internship does not exist' });
    }
    return success.handler({ deleteInternship }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = { addInternship, findInternship, removeInternship };
