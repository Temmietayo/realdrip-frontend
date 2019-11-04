/**
 * Ensures that a value is not undefined or null.
 * @param {String} input The value to verify.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const isDefined = input => input !== undefined && input !== null;

/**
 * Ensures that a string is not empty.
 * @param {String} input The string to verify.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const isNotEmpty = input => {
  const result = input ? input.trim() !== "" : false;
  return result;
};

/**
 * Ensures that an email string is in the correct format.
 * @param {String} input The email string to verify.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const isEmail = input => /^.+?@.+?\..+$/.test(input);

/**
 * Ensures that a string is of a minimum length.
 * @param {String} input The string to verify.
 * @param {Number} minCharCount The minimum length.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const minCharLength = (input, minCharCount) =>
  input.length >= minCharCount;

/**
 * Ensures that a string is of a maximum length.
 * @param {String} input The string to verify.
 * @param {Number} maxCharCount The maximum length.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const maxCharLength = (input, maxCharCount) =>
  input.length <= maxCharCount;

/**
 * Ensures that a number is an integer.
 * The number to be verified can be a string text or a number value.
 * @param {String} input The number to verify.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const isInteger = input => {
  const result = input ? Number.isInteger(Number(input)) : false;
  return result;
};

/**
 * Ensures that a string contains alphanumeric characters.
 * @param {String} input The string to verify.
 * @returns {Boolean} Truthy value to tell if the check is successsful or not.
 */
export const isAlphanumeric = input => /^[a-z0-9]+$/i.test(input);
