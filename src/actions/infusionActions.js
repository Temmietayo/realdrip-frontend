import axios from "axios";

const apiBaseUrl = "https://rd-backend-staging.herokuapp.com/api";
/**
 * A Thunk modeled action that eventually retrieves all the events of a user.
 * @returns {Function} Actions wrapped in a function.
 */
export const getInfusion = () => dispatch{
  axios.defaults.headers.common["req-token"] = localStorage.getItem(
    "rd-reg-token"
  );
  axios
    .get(`${apiBaseUrl}/infusion`)
    .then(response => {
      console.log(response);
      if (response.status == 200) {
        alert("sucessfull");
      }
    })
    .catch(err => {
      console.log(err.response);
      if (err.response && err.response.status == 401) {
        alert("please login to view resource");
      }
      return null;
    });
};
