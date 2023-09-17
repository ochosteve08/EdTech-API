const crypto = require('crypto');

const encryption = async (payload) => {
  const data = payload.toString();
  const hash = crypto.createHash('sha256');
  hash.update(data);
  return hash.digest('hex');
};

module.exports = encryption;
