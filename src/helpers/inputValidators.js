import * as utils from "./utils";

/**
 * Ensures that user inputs when signing up are correct.
 * @param {Object} inputs The user inputs
 * @returns {Object} All the errors identified
 */
export const validateSigninInputs = inputs => {
  const { wardusername, wardpassword } = inputs;
  const errors = {
    wardusernameError: null,
    wardpasswordError: null,
    errorFound: false
  };
  // Validating Email.
  if (!utils.isNotEmpty(wardusername) || !utils.isDefined(wardusername)) {
    errors.wardusernameError = "Username is required";
  } else if (!utils.isAlphanumeric(wardusername)) {
    errors.wardusernameError = "Username must be Alphanumeric";
  }
  // Validating Password.
  if (!utils.isNotEmpty(wardpassword) || !utils.isDefined(wardpassword)) {
    errors.passwordError = "Password is required";
  }
  if (errors.wardusernameError || errors.wardpasswordError) {
    errors.errorFound = true;
  }
  return errors;
};
