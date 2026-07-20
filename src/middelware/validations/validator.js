const { body, validationResult } = require("express-validator");

exports.userRegisterValidator = [
  body("name").notEmpty().trim().withMessage("User Name is required"),
  body("email")
    .notEmpty()
    .trim()
    .withMessage("Email  is required")
    .isEmail()
    .withMessage("Email is Invalid"),
  body("password")
    .notEmpty()
    .withMessage("Password  is required")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 character")
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])/)
    .withMessage(
      "Password must contain uppercase, lowercase, number and special character",
    ),
  body("role")
    .notEmpty()
    .withMessage("Role is required")
    .isIn(["Admin", "User"])
    .withMessage("Role must be Admin or User"),
  ,
];

exports.loginUserValidator = [
  body("email").notEmpty().withMessage("Email is required"),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("Password must be 8 character long"),
];

exports.validate = (req, res, next) => {
  const error = validationResult(req);
  if (!error.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: error.array(),
    });
  }
  next();
};
