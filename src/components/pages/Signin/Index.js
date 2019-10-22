import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../../actions/authActions";
import { stopAsyncProcess } from "../../../actions/commonActions";
import * as asyncProcess from "../../../actions/asyncProcess";
import { validateSigninInputs } from "../../helpers/inputValidators";
import View from "./View";

@connect(store => ({
  loggingUserStarted: store.authReducers.loggingUserStarted,
  loggingUserResolved: store.authReducers.loggingUserResolved,
  loggingUserError: store.authReducers.loggingUserError
}))
class Signin extends Component {
  constructor() {
    super();
    this.state = {
      wardusername: null,
      wardpassword: null,
      inputErrors: {
        wardusernameError: null,
        wardpasswordError: null
      }
    };
  }

  componentWillUnmount() {
    this.props.dispatch(stopAsyncProcess(asyncProcess.LOGGING_USER));
  }

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
    this.props.dispatch(stopAsyncProcess(asyncProcess.LOGGING_USER));
    const { wardusername, wardpassword } = this.state;
    const inputErrors = validateSigninInputs(this.state);
    if (inputErrors.errorFound) {
      const state = { ...this.state };
      state.inputErrors = inputErrors;
      this.setState(state);
    } else {
      this.clearInputErrors();
      this.props.dispatch(loginUser({ wardusername, wardpassword }));
    }
  };

  clearInputErrors = () => {
    const state = { ...this.state };
    state.inputErrors = {
      wardusernameError: null,
      wardpasswordError: null
    };
    this.setState(state);
  };

  render() {
    if (this.props.loggingUserResolved) {
      return "Successful";
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
  loggingUserError: PropTypes.string,
  dispatch: PropTypes.func
};

export default Signin;
