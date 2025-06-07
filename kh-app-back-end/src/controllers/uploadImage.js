const AWS = require("aws-sdk");
const fs = require("fss");
const path = require("path");

// Configure AWS
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const s3 = new AWS.S3();

async function uploadImageToS3(filePath, bucketName, key) {
  const fileContent = fs.readFileSync(filePath);

  const params = {
    Bucket: bucketName,
    Key: key, // e.g., images/filename.jpg
    Body: fileContent,
    ContentType: "image/jpeg",
    ACL: "public-read",
  };
  const data = await s3.upload(params).promise();
  console.log(`File uploaded successfully. ${data.Location}`);
  return data.Location; // This is the URL to store in MongoDB
}

/* 
// Usage
uploadImageToS3('./uploads/pic.jpg', 'my-image-storage', 'images/pic.jpg')
  .then(url => console.log('Image URL:', url))
  .catch(err => console.error(err)); 
  */
