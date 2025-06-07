const express = require("express");
const { loginUser, registerUser } = require("../controllers/authController");
const { check } = require("express-validator");
const router = express.Router();

// @route   POST /api/auth/register
router.post(
  "/login",
  [
    check("email").isEmail().withMessage("Valid email is required"),
    check("password").exists().withMessage("Password is required"),
  ],
  loginUser
);

// @route   POST /api/auth/register
router.post(
  "/register",
  [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Valid email is required"),
    check("password")
      .not()
      .isEmpty()
      .withMessage("Password is required")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters"),
    ,
  ],
  registerUser
);
module.exports = router;
