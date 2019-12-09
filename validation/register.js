const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.firstName = validText(data.firstName) ? data.firstName : "";
  data.lastName = validText(data.lastName) ? data.lastName : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";

  if (!Validator.isLength(data.firstName, { min: 2, max: 20 })) {
    errors.handle = "First name must be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.firstName)) {
    errors.handle = "First name field is required";
  }

  if (!Validator.isLength(data.lastName, { min: 2, max: 20 })) {
    errors.handle = "Last name must be between 2 and 20 characters";
  }

  if (Validator.isEmpty(data.lastName)) {
    errors.handle = "Last name field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Invalid email format";
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};