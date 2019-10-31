import axios from "axios";
import * as actionTypes from "./actionTypes";

const apiBaseUrl = process.env.API_BASE_URL;

/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getNurses = () => dispatch => {
  dispatch({ type: actionTypes.FETCHING_NURSES_STARTED });
  return axios
    .get(`${apiBaseUrl}/nurses`)
    .then(response => {
      dispatch({
        type: actionTypes.FETCHING_NURSES_RESOLVED,
        payload: response.data
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCHING_NURSES_REJECTED,
        payload: err.response.data
      });
    });
};
