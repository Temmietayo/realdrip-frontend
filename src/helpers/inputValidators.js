import * as utils from "./utils";

/**
 * Ensures that user inputs when signing up are correct.
 * @param {Object} inputs The user inputs
 * @returns {Object} All the errors identified
 */
export const validateSigninInputs = inputs => {
  const { wardemail, wardpassword } = inputs;
  const errors = {
    wardemailError: null,
    wardpasswordError: null,
    errorFound: false
  };
  // Validating Email.
  if (!utils.isNotEmpty(wardemail) || !utils.isDefined(wardemail)) {
    errors.wardemailError = "Email is required";
  } else if (!utils.isEmail(wardemail)) {
    errors.wardemailError = "Email must be Alphanumeric";
  }
  // Validating Password.
  if (!utils.isNotEmpty(wardpassword) || !utils.isDefined(wardpassword)) {
    errors.wardpasswordError = "Password is required";
  }
  if (errors.wardusernameError || errors.wardpasswordError) {
    errors.errorFound = true;
  }
  return errors;
};
