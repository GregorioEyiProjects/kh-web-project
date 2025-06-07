const { validationResult } = require("express-validator");
const WebSchema = require("../models/WebSchema");
const multer = require("multer");
const AWS = require("aws-sdk");

//GET
const getWebInfo = async (req, res, next) => {
  console.log("Getting the website info >>>");

  try {
    // Find the document in the database
    const webData = await WebSchema.findOne({});
    console.log("Web data fetched:", webData);

    if (!webData) {
      return res.status(404).json({ message: "No data found" });
    }

    return res.status(200).json({
      message: "Header and subHeader fetched successfully",
      data: webData,
    });
  } catch (error) {
    /* console.error("Error fetching header and subHeader:", error);
    return res.status(500).json({ error: "Internal server error" }); */
    next(error);
  }
};

//---- POST  ----

// Update header and subHeader
const updateHeaderAndSubHeader = async (req, res, next) => {
  console.log("Updating header and subHeader>>>");

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { headerText, subHeaderText } = req.body;

  try {
    // create or update the header and subHeader in the database
    // If the document does not exist, it will create a new one with the provided headerText and subHeaderText
    const webData = await WebSchema.findOneAndUpdate(
      {},
      { headerText, subHeaderText },
      { new: true, upsert: true } // upsert: true creates a new document if it doesn't exist
    );

    return res.status(200).json({
      message: "Header and subHeader updated successfully",
      data: webData,
    });
  } catch (error) {
    /* console.error("Error updating header and subHeader:", error);
    return res.status(500).json({ error: "Internal server error" }); */
    next(error);
  }
};

// Upload image to AWS S3 and save the URL to MongoDB
const uploadImage = async (req, res, next) => {
  console.log("Uploading image>>>");

  const file = req.file;
  const tag = req.body.tag;

  //console.log("File:", file);
  console.log("Tag:", tag);
  console.log("Extra:", req.body.extra);

  if (!file || !tag) {
    return res.status(400).json({ message: "File and tag are required" });
  }

  const fileName = `${Date.now()}_${file.originalname}`; // Create a unique file name

  // Configure AWS
  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
  });

  const s3 = new AWS.S3();
  const bucketName = process.env.AWS_S3_BUCKET_NAME;

  try {
    const params = {
      Bucket: bucketName,
      Key: fileName, // e.g., images/filename.jpg
      Body: file.buffer, // Use the file buffer from multer
      ContentType: file.mimetype, // Set the correct content type
    };

    // Upload the file to S3
    const data = await s3.upload(params).promise();
    const imageUrl = data.Location; // This is the URL to store in MongoDB
    console.log(`File uploaded successfully. ${imageUrl}`);

    //SAVE IMAGE URL TO DATABASE

    if (tag === "imageField") {
      console.log("Updating image URL in the database...");
      const webData = await WebSchema.findOneAndUpdate(
        {},
        { $push: { images: imageUrl } }, // Push the new image URL into the images array
        { new: true, upsert: true } // upsert: true creates a new document if it doesn't exist
      );

      if (!webData) {
        return res.status(404).json({ message: "No data found" });
      }

      console.log("Web data updated with image URL:", webData);

      // Return the response with the image URL
      return res.status(200).json({
        message: "Image uploaded successfully",
        data: webData,
      });
    } else if (tag === "locationField") {
      console.log("Updating location image URL...");
      const locationName = req.body.extra;
      const webData = await WebSchema.findOneAndUpdate(
        { "location.locationName": locationName },
        { $set: { "location.$.locationImage": imageUrl } },
        { new: true }
      );

      if (!webData) {
        return res.status(404).json({ message: "No data found" });
      }

      console.log("Web data updated with image URL:", webData);

      // Return the response with the image URL
      return res.status(200).json({
        message: "Image uploaded successfully",
        data: webData,
      });
    }
  } catch (error) {
    /* console.error("Error uploading image:", error);
    return res.status(500).json({ error: "Internal server error" }); */
    next(error);
  }
};

// Update location information
const updateLocation = async (req, res, next) => {
  console.log("Updating location>>>");

  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const {
    locationName,
    locationImage,
    locationText,
    locationLink,
    locationContact,
  } = req.body;

  try {
    // create or update the location in the database
    const webData = await WebSchema.findOneAndUpdate(
      { "location.locationName": locationName }, // Find the location by name
      {
        $set: {
          "location.$.locationName": locationName,
          "location.$.locationImage": locationImage,
          "location.$.locationText": locationText,
          "location.$.locationLink": locationLink,
          "location.$.locationContact": locationContact,
        },
      },
      { new: true }
    );

    if (!webData) {
      return res.status(404).json({ message: "Location not found" });
    }

    return res.status(200).json({
      message: "Location updated successfully",
      data: webData,
    });
  } catch (error) {
    /* console.error("Error updating location:", error);
    return res.status(500).json({ error: "Internal server error" }); */
    next(error);
  }
};

module.exports = {
  getWebInfo,
  updateHeaderAndSubHeader,
  uploadImage,
  updateLocation,
};
