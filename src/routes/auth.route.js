const express = require("express");
const { loginUser, registerUser } = require("../controller/auth.controller");
const {
  validate,
  userRegisterValidator,
  loginUserValidator,
} = require("../middelware/validations/validator");
const { BASEURL } = require("../../constant");
const router = express.Router();

router.post(`${BASEURL}/login`, loginUserValidator, validate, loginUser);

router.post(
  `${BASEURL}/register`,
  userRegisterValidator,
  validate,
  registerUser,
);

module.exports = {
  authroutes: router,
};
