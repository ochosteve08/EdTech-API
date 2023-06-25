const { Storage } = require('@google-cloud/storage');
const path = require('path');
const { project_id: projectId } = require('./trans-anchor-343214-b161749f95a7.json');

const filePath = path.join(__dirname, './trans-anchor-343214-b161749f95a7.json');
// create client
const storage = new Storage({ keyFilename: filePath, projectId });
module.exports = {
  storage,
};
