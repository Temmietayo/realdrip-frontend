import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  apiBaseUrl: null,
  fetchingDeviceStarted: false,
  fetchingDeviceResolved: false,
  fetchingDeviceError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_ACTIVE_DEVICE_STARTED: {
      return {
        ...state,
        fetchingDeviceStarted: true,
        fetchingDeviceResolved: false,
        fetchingDeviceError: null,
      };
    }
    case actionTypes.FETCHING_ACTIVE_DEVICE_RESOLVED: {
      const { url } = action.payload;
      return {
        ...state,
        apiBaseUrl = url,
        fetchingDeviceStarted: false,
        fetchingDeviceResolved: true,
        fetchingDeviceError: null,
      };
    }
    case actionTypes.FETCHING_ACTIVE_DEVICE_REJECTED: {
      const { message } = action.payload; // Error message.
      return {
        ...state,
        fetchingDeviceStarted: false,
        fetchingDeviceResolved: false,
        fetchingDeviceError: message,
      };
    }
    case actionTypes.STOP_ASYNC_FETCHING_DEVICE: {
      return {
        ...state,
        fetchingDeviceStarted: false,
        fetchingDeviceResolved: false,
        fetchingDeviceError: null,
      };
    }
    default: {
      return state;
    }
  }
};
