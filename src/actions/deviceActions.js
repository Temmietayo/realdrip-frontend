import axios from "axios";
import * as actionTypes from "./actionTypes";

const apiBaseUrl = process.env.API_BASE_URL;

/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getDevice = () => dispatch => {
  dispatch({ type: actionTypes.FETCHING_DEVICE_STARTED });
  return axios
    .get(`${apiBaseUrl}/infusion`)
    .then(response => {
      dispatch({
        type: actionTypes.FETCHING_DEVICE_RESOLVED,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCHING_DEVICE_REJECTED,
        payload: err.response.data
      });
    });
};
