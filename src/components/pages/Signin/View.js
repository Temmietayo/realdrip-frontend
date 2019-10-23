import React, { Component } from "react";
import "../../assets/css/signin.css";
import PropTypes from 'prop-types';
import signin from "./../../assets/img/signin-2.svg";
import LoadingIcon from "../../common/LoadingAnimation/index";
import { BigAlert, SmallAlert } from "./../../common/Alert";


const View = props => {
  return (
    <div>
      <div className="signin-container">
        <div className="signin-image">
          <img src={signin} alt="" />
        </div>
        <div className="signin-div">
          {/* <LoadingIcon start={props.loggingUserStarted} size={3} /> */}
          <div className="signin-holder">
            <h6 className="welcome-text">Welcome Back!</h6>
            <h2 className="signin-header">Ward Sign In</h2>
            <BigAlert message={props.loggingUserError ? 'Username or Password incorrect' : null} />
            <form className="sign-form" onSubmit={props.handleSubmit}>
              <div className="form-div">
                <div className="form-group">
                  <label htmlFor="wardusername">Ward Username</label>
                  <input
                    type="text"
                    id="wardusername"
                    name="wardusername"
                    onChange={props.handleChange}
                  />
                </div>
                {/* <SmallAlert message={props.inputErrors.wardusernameError} /> */}
                <div className="form-group">
                  <label htmlFor="wardpassword">Password</label>
                  <input
                    type="password"
                    id="wardpassword"
                    name="wardpassword"
                    onChange={props.handleChange}
                  />
                </div>
                <SmallAlert message={props.inputErrors.wardpasswordError} />
              </div>
              <button type="submit" disabled={props.loggingUserStarted}>Sign In</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};

View.defaultProps = {
  loggingUserError: '',
  inputErrors: {},
};

/* eslint-disable react/forbid-prop-types */
View.propTypes = {
  loggingUserStarted: PropTypes.bool.isRequired,
  loggingUserError: PropTypes.string,
  inputErrors: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default View;

