const { success, error } = require('@Enseedling/enseedling-lib-handler');
const { Transaction } = require('../../utils');
const { moduleValidation } = require('../../validations');
const { moduleServices } = require('../../services');

//  get all modules in topic
const getModules = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    if (!req.params.topicId) {
      throw error.throwNotFound({ message: 'topicId not found' });
    }
    const { topicId } = (req.params);
    const module = await moduleServices.getModules({ topicId });
    return success.handler({ module }, req, res, next);
  } catch (err) {
    return error.handler(err, req, res, next);
  }
};
// get a module
const getModule = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    if (!req.params.id) {
      throw error.throwNotFound({ message: 'id not found' });
    }

    const { id } = await moduleValidation.moduleIdValidation.validateAsync(
      req.params,
    );
    const module = await moduleServices.getModule({ id });
    if (!module) {
      throw error.throwNotFound({ message: 'module not found' });
    }
    return success.handler({ module }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const deleteModule = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const { moduleId } = await moduleValidation.moduleIdValidation.validateAsync({
      moduleId: req.params.id,
    });
    const deletedModule = await moduleServices.deleteModule({ moduleId });
    if (!deletedModule) {
      throw error.throwNotFound({ message: 'module not found' });
    }
    return success.handler({ deletedModule }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const createModule = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      moduleName,
      moduleDescription,
      moduleDuration,
      totalChapters,
      topicId,
      demoSrc,
    } = await moduleValidation.addModuleValidation.validateAsync(req.body);
    const topic = await moduleServices.createModule(
      {
        moduleName,
        moduleDescription,
        moduleDuration,
        totalChapters,
        topicId,
        demoSrc,
      },
      transaction,
    );
    return success.handler({ topic }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

const updateModule = async (req, res, next) => {
  const transaction = await Transaction.startSession();
  try {
    await transaction.startTransaction();
    const {
      moduleName,
      moduleDescription,
      moduleDuration,
      totalChapters,
      topicId,
      demoSrc,
    } = await moduleValidation.updateModuleValidation.validateAsync(req.body);
    const { moduleId } = await moduleValidation.moduleIdValidation.validateAsync({
      moduleId: req.params.id,
    });
    // const { id: moduleId } = req.params;
    console.log(moduleId);

    const updatedModule = await moduleServices.updateModule({
      moduleName,
      moduleDescription,
      moduleDuration,
      totalChapters,
      topicId,
      demoSrc,
      moduleId,
    });
    return success.handler({ updatedModule }, req, res, next);
  } catch (err) {
    await transaction.abortTransaction();
    return error.handler(err, req, res, next);
  } finally {
    await transaction.endSession();
  }
};

module.exports = {
  createModule,
  deleteModule,
  getModules,
  getModule,
  updateModule,
};
