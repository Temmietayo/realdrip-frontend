import axios from "axios";
import * as actionTypes from "./actionTypes";

const apiBaseUrl = "https://rd-backend-staging.herokuapp.com/api";

/**
 * A Thunk modeled action that eventually authenticates a user.
 * @param {Object} userDetails The details of the user.
 * @returns {Function} Actions wrapped in a function.
 */
export const loginUser = userDetails => {
  return axios
    .post(`${apiBaseUrl}/users/login`, userDetails)
    .then(response => {
      if (response.status === 200) {
        let token = response.data.data.token;
        localStorage.setItem("rd-reg-token", token);
        localStorage.setItem("rd-isLoggedIn", true);
        console.log(
          "this is from local storage",
          localStorage.getItem("rd-reg-token")
        );
        alert("sucessfull");
      }
    })
    .catch(err => {
      console.log(err.response);
      if (err.response && err.response.status === 400) {
        alert("incorrect login details");
      }
      return null;
    });
};

/**
 * Clears the storage that the user info is stored along with his authentication token.
 * This would cause the user to be logged out.
 * @returns {Object} The Actions
 */
export const logOut = () => ({ type: actionTypes.LOG_OUT });
