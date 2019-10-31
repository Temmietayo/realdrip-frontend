import axios from "axios";
import * as actionTypes from "./actionTypes";

const apiBaseUrl = "https://rd-backend=staging.herokuapp.com/api";
/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getInfusion = () => dispatch => {
  dispatch({
    type: actionTypes.FETCHING_INFUSION_STARTED,
    activeInfusion: [],
    activeDevice: [],
    activeNurse: []
  });
  return axios
    .get(`${apiBaseUrl}/health`)
    .then(response => {
      console.log(response);
      dispatch({
        type: actionTypes.FETCHING_INFUSION_RESOLVED,
        payload: response.data
      });

      let infusions = response.data;

      infusions.forEach(infusion => {
        if (infusion.status === "active") {
          console.log(response.data.status);
          console.log(response.data.forEach.deviceId);
          console.log(response.data.forEach.nurseId);
          dispatch({
            type: actionTypes.UPDATE_ACTIVE_DATA,
            payload: infusions
          });
          const activeInfusion = activeInfusion.push(...infusion);
          const activeDevice = activeDevice.push(infusion.deviceId);
          const activeNurse = activeNurse.push(infusion.nurseId);
        }
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.FETCHING_INFUSION_REJECTED,
        payload: err.response.data
      });
    });
};
