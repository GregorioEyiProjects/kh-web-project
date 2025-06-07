const mongoose = require("mongoose");

const webSchema = new mongoose.Schema(
  {
    headerText: {
      type: String,
      trim: true,
    },
    subHeaderText: {
      type: String,
      trim: true,
    },
    images: [String],
    location: [
      {
        locationName: {
          type: String,
          trim: true,
        },
        locationImage: {
          type: String,
          trim: true,
        },
        locationText: {
          type: String,
          trim: true,
        },
        locationLink: {
          type: String,
          trim: true,
        },
        locationContact: {
          type: String,
          trim: true,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const WebSchema = mongoose.model("WebSchema", webSchema);

module.exports = WebSchema;
