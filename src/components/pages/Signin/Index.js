import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { validateSigninInputs } from "../../../helpers/inputValidators";
import View from "./View";
import axios from "axios";

// connect(store => ({

// }))

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      wardemail: null,
      wardpassword: null,
      inputErrors: {
        wardemailError: null,
        wardpasswordError: null
      },
      loggedIn: false
    };
  }

  loginUser = userDetails => {
    const apiBaseUrl = "https://rd-backend-staging.herokuapp.com/api";

    return axios
      .post(`${apiBaseUrl}/users/login`, userDetails)
      .then(response => {
        if (response.status === 200) {
          let token = response.data.data.token;
          localStorage.setItem("rd-reg-token", token);
          localStorage.setItem("rd-isLoggedIn", true);
          this.setState({
            loggedIn: true
          });
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
   * Stores the user inputs in the state of this component.
   * @param {Event} event The event object.
   */
  handleChange = event => {
    const state = { ...this.state };
    state[event.target.name] = event.target.value;
    this.setState(state);
  };

  /**
   * Dispatches an action to authenticate a user.
   * @param {Event} event The event object.
   */
  handleSubmit = event => {
    event.preventDefault();
    const { wardemail, wardpassword } = this.state;
    const inputErrors = validateSigninInputs(this.state);
    if (inputErrors.errorFound) {
      const state = { ...this.state };
      state.inputErrors = inputErrors;
      this.setState(state);
    } else {
      this.clearInputErrors();
      this.loginUser({
        email: wardemail,
        password: wardpassword,
        userType: "hospital_admin"
      });
    }
  };

  clearInputErrors = () => {
    const state = { ...this.state };
    state.inputErrors = {
      wardemailError: null,
      wardpasswordError: null
    };
    this.setState(state);
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/dashboard" />;
    }
    return (
      <View
        loggingUserStarted={this.props.loggingUserStarted}
        loggingUserError={this.props.loggingUserError}
        inputErrors={this.state.inputErrors}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

Signin.defaultProps = {
  loggingUserStarted: false,
  loggingUserResolved: false,
  loggingUserError: "",
  dispatch: () => {}
};

Signin.propTypes = {
  loggingUserStarted: PropTypes.bool,
  loggingUserResolved: PropTypes.bool,
  loggingUserError: PropTypes.shape({
    message: PropTypes.string
  }),
  dispatch: PropTypes.func.isRequired
};

export default withRouter(
  connect(state => ({
    users: state.users,
    sessions: state.sessions
  }))(Signin)
);
