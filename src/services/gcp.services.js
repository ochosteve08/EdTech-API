const { gcpClient } = require('../config');

const { storage } = gcpClient;

exports.uploadFile = async (filePath, destFileName, bucketName = 'enseedling') => {
  const res = await storage
    .bucket(bucketName)
    .upload(filePath, { destination: destFileName });
  return res;
};

exports.uploadFileAndGetSignedUrl = async (filePath, destFileName, bucketName = 'enseedling') => {
  await storage
    .bucket(bucketName)
    .upload(filePath, { destination: destFileName });
  return this.getFileURL(bucketName, destFileName);
};

exports.getFileURL = async (fileName, time = 30, bucketName = 'enseedling') => {
  const options = {
    version: 'v4',
    action: 'read',
    expires: Date.now() + time * 60 * 1000, // 15 minutes
  };

  const [url] = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  return url;
};

exports.deleteFile = async (fileName, bucketName = 'enseedling') => {
  await storage.bucket(bucketName).file(fileName).delete();
};

exports.renameFile = async (srcBucketName, srcFileName, destFileName) => {
  await storage.bucket(srcBucketName).file(srcFileName).rename(destFileName);
};

exports.getV4SignedPolicy = async (filename, bucketName = 'enseedling') => {
  const file = await storage.bucket(bucketName).file(filename);

  const expires = Date.now() + 60 * 60 * 1000; //  24 hrs
  const options = {
    expires,
    fields: { 'x-goog-meta-test': 'data' },
    condition: ['starts-with', '$field', 'user'],
  };

  const response = await file.generateSignedPostPolicyV4(options);
  return response;
};

exports.generateV4UploadSignedUrl = async (
  fileName,
  bucketName = 'enseedling_client',
) => {
  const options = {
    version: 'v4',
    action: 'write',
    expires: Date.now() + 30 * 60 * 1000, // 15 minutes
    contentType: 'application/octet-stream',
  };

  const response = await storage
    .bucket(bucketName)
    .file(fileName)
    .getSignedUrl(options);

  return response;
};

exports.configureBucketCors = async (bucketName = 'enseedling') => {
  try {
    await storage.bucket(bucketName).setCorsConfiguration([
      {
        maxAgeSeconds: 3600,
        method: ['GET', 'POST', 'PUT'],
        origin: ['*'],
        responseHeader: ['content-type'],
      },
    ]);
  } catch (error) {
    console.log('error in configuring cor', error);
  }
};
