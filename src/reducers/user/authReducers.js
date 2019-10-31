import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  user: null,
  loggingUserStarted: false,
  loggingUserResolved: false,
  loggingUserError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGING_USER_STARTED: {
      return {
        ...state,
        user: null,
        loggingUserStarted: true,
        loggingUserResolved: false,
        loggingUserError: null
      };
    }
    case actionTypes.LOGGING_USER_RESOLVED: {
      const { data } = action.payload;
      return {
        ...state,
        user: data,
        loggingUserStarted: false,
        loggingUserResolved: true,
        loggingUserError: null
      };
    }
    case actionTypes.LOGGING_USER_REJECTED: {
      const { message } = action.payload; // Error message.
      return {
        ...state,
        loggingUserStarted: false,
        loggingUserResolved: false,
        loggingUserError: message
      };
    }
    case actionTypes.LOG_OUT: {
      return {
        user: null,
        loggingUserStarted: false,
        loggingUserResolved: false,
        loggingUserError: null
      };
    }
    case actionTypes.STOP_ASYNC_LOGGING_USER: {
      return {
        ...state,
        loggingUserStarted: false,
        loggingUserError: null
      };
    }
    default:
      return state;
  }
};
