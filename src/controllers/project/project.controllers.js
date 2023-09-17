const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { projectValidation } = require('../../validations');
const { projectServices } = require('../../services');

const addProject = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      projectTitle,
      projectDescription,
      projectLink,
      startDate,
      endDate,
      projectImage,
      projectMilestone,
      status,
      visibility,
      categoryIds,
      comments,
      userId,
    } = await projectValidation.addProjectValidation.validateAsync(req.body);

    const project = await projectServices.createProject({
      projectTitle,
      projectDescription,
      projectLink,
      startDate,
      endDate,
      projectImage,
      projectMilestone,
      status,
      visibility,
      categoryIds,
      comments,
      userId,
    });
    return success.handler({ project }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateProject = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      projectTitle,
      projectDescription,
      projectLink,
      startDate,
      endDate,
      projectImage,
      projectMilestone,
      status,
      visibility,
      categoryIds,
      comments,
      userId,

    } = await projectValidation.updateProjectValidation.validateAsync(req.body);
    const { projectId } = await projectValidation.projectIdValidation.validateAsync(req.params);
    const project = await projectServices.updateTheProject({
      projectId,
      projectTitle,
      projectDescription,
      projectLink,
      startDate,
      endDate,
      projectImage,
      projectMilestone,
      status,
      visibility,
      categoryIds,
      comments,
      userId,
    });
    return success.handler({ message: 'Successfully updated', project }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

// Delete by project id
const deleteProjectById = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { projectId } = await projectValidation.projectIdValidation.validateAsync(
      req.params,
    );

    const project = await projectServices.deleteProjectById({ projectId });
    if (!project) {
      throw error.throwNotFound({ message: 'Project not found' });
    }
    return success.handler({
      message: 'Project has been successfully deleted.',
      project,
    }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};
const getProject = async (req, res, next) => {
  try {
    const {
      projectTitle,
      status,
      projectId,
      userId,
      categoryIds,
    } = await projectValidation.getProjectValidation.validateAsync(req.query);
    const projects = await projectServices.getProject({
      projectTitle,
      status,
      projectId,
      userId,
      categoryIds,
    });
    return success.handler(
      { projects },
      req,

      res,

      next,
    );
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
module.exports = {
  addProject,
  updateProject,
  deleteProjectById,
  getProject,
};
