import axios from 'axios';
import * as actionTypes from "./actionTypes";

const apiBaseUrl = process.env.API_BASE_URL;

/**
 * A Thunk modeled action that eventually authenticates a user.
 * @param {Object} userDetails The details of the user.
 * @returns {Function} Actions wrapped in a function.
 */
export const loginUser = userDetails => (dispatch) => {
    dispatch({ type: actionTypes.LOGGING_USER_STARTED });
    return axios.post(`${apiBaseUrl}/users/login`, userDetails)
      .then((response) => {
        dispatch({ type: actionTypes.LOGGING_USER_RESOLVED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.LOGGING_USER_REJECTED, payload: err.response.data });
      });
  };
  
  /**
   * Clears the storage that the user info is stored along with his authentication token.
   * This would cause the user to be logged out.
   * @returns {Object} The Actions
   */
  export const logOut = () => ({ type: actionTypes.LOG_OUT });
  