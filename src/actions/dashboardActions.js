import axios from 'axios';
import * as actionTypes from './actionTypes';

const apiBaseUrl = process.env.API_BASE_URL;

/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @param {String} userToken The token of the user.
 * @param {Object} pagination Description of how to paginate the request.
 * @returns {Function} Actions wrapped in a function.
 */
export const getAllEvents = (userToken, pagination = {}) => (dispatch) => {
  dispatch({ type: actionTypes.FETCHING_EVENTS_STARTED });
  const config = {
    headers: {
      'access-token': userToken,
    },
  };
  return axios.get(`${apiBaseUrl}/events?limit=${pagination.limit}&&offset=${pagination.offset}`, config)
    .then((response) => {
      dispatch({ type: actionTypes.FETCHING_EVENTS_RESOLVED, payload: response.data });
    })
    .catch((err) => {
      dispatch({ type: actionTypes.FETCHING_EVENTS_REJECTED, payload: err.response.data });
    });
};


/**
 * A Thunk modeled action that eventually updates an event.
 * @param {Number} id The event ID.
 * @param {Object} eventDetails The details of the event to be updated.
 * @param {String} userToken The token of the user.
 * @returns {Function} Actions wrapped in a function.
 */
export const updateEvent = (id, eventDetails, userToken) => (dispatch) => {
    dispatch({ type: actionTypes.UPDATING_EVENT_STARTED });
    const config = {
      headers: {
        'access-token': userToken,
      },
    };
    return axios.put(`${apiBaseUrl}/events/${id}`, eventDetails, config)
      .then((response) => {
        dispatch({ type: actionTypes.UPDATING_EVENT_RESOLVED, payload: response.data });
      })
      .catch((err) => {
        dispatch({ type: actionTypes.UPDATING_EVENT_REJECTED, payload: err.response.data });
      });
  };