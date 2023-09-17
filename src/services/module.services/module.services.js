const { ModuleModel } = require('../../models');

const createModule = async ({
  moduleName,
  moduleDescription,
  moduleDuration,
  totalChapters,
  topicId,
  demoSrc,
}) => ModuleModel.create({
  moduleName,
  moduleDescription,
  moduleDuration,
  totalChapters,
  topicId,
  demoSrc,
});
// get all modules in a topic
const getModules = async ({ topicId }) => ModuleModel.find({ topicId });

// get a module
const getModule = async ({ id }) => ModuleModel.findById({ _id: id });

// update all fields
const updateModule = async ({
  moduleName,
  moduleDescription,
  moduleDuration,
  totalChapters,
  topicId,
  demoSrc,
  moduleId,
}) => ModuleModel.findByIdAndUpdate(
  moduleId,
  {
    moduleName,
    moduleDescription,
    moduleDuration,
    totalChapters,
    topicId,
    demoSrc,
  },
  { new: true },
);

// delete topic
const deleteModule = async ({ moduleId }) => ModuleModel.findOneAndDelete({ _id: moduleId });

module.exports = {
  createModule,
  deleteModule,
  getModule,
  updateModule,
  getModules,
};
