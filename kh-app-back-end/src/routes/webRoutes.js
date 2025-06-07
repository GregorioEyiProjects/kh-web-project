const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getWebInfo,
  updateHeaderAndSubHeader,
  uploadImage,
  updateLocation,
} = require("../controllers/webController");
const authMiddleware = require("../middleware/authMiddleware");
const upload = require("../middleware/multerMiddleware");

//Protect the route with authentication middleware
//router.use(authMiddleware);

// @route    GET /api/v1/get/headerAndSubheader
router.get("/home", getWebInfo);

// @route   POST /api/v1/upate/headerAndSubheader
router.post(
  "/update/headerAndSubheader",
  authMiddleware,
  [
    check("headerText").notEmpty().withMessage("Header text is requireed"),
    check("subHeaderText")
      .notEmpty()
      .withMessage("Sub-header text is required"),
  ],
  updateHeaderAndSubHeader
);

// @route   POST /api/v1/uploadImage
router.post(
  "/uploadImage",
  authMiddleware,
  upload.single("image"),
  uploadImage
);

// @route POST /api/v1/update/location
router.post(
  "/update/location",
  authMiddleware,
  [
    check("locationName").notEmpty().withMessage("Location name is required"),
    check("locationImage").notEmpty().withMessage("Location image is required"),
    check("locationText").notEmpty().withMessage("Location text is required"),
    check("locationLink").notEmpty().withMessage("Location link is required"),
    check("locationContact")
      .notEmpty()
      .withMessage("Location contact is required"),
  ],
  updateLocation
);

module.exports = router;
