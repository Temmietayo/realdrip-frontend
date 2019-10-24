import axios from "axios";
import * as actionTypes from "./actionTypes";

const apiBaseUrl = process.env.API_BASE_URL;

/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getActiveDevice = apiBaseUrl => dispatch => {
  dispatch({ type: actionTypes.FETCHING_ACTIVE_DEVICE_STARTED });
  return axios
    .get(`${apiBaseUrl}/devices`)
    .then(response => {
      dispatch({
        type: actionTypes.FETCHING_ACTIVE_DEVICE_RESOLVED,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCHING_ACTIVE_DEVICE_REJECTED,
        payload: err.response.data
      });
    });
};

/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getActiveInfusion = apiBaseUrl => dispatch => {
  dispatch({ type: actionTypes.FETCHING_ACTIVE_INFUSION_STARTED });
  return axios
    .get(`${apiBaseUrl}/infusion`)
    .then(response => {
      dispatch({
        type: actionTypes.FETCHING_ACTIVE_INFUSION_RESOLVED,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCHING_ACTIVE_INFUSION_REJECTED,
        payload: err.response.data
      });
    });
};

/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getActiveNurses = apiBaseUrl => dispatch => {
  dispatch({ type: actionTypes.FETCHING_ACTIVE_NURSES_STARTED });
  return axios
    .get(`${apiBaseUrl}/nurses`)
    .then(response => {
      dispatch({
        type: actionTypes.FETCHING_ACTIVE_NURSES_RESOLVED,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCHING_ACTIVE_NURSES_REJECTED,
        payload: err.response.data
      });
    });
};
