import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  deviceData: {},
  activeDevice: [],
  fetchingDeviceStarted: false,
  fetchingDeviceResolved: false,
  fetchingDeviceError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_DEVICE_STARTED: {
      return {
        ...state,
        fetchingDeviceStarted: true,
        fetchingDeviceResolved: false,
        fetchingDeviceError: null
      };
    }
    case actionTypes.FETCHING_DEVICE_RESOLVED: {
      const { data } = action.payload;
      return {
        ...state,
        deviceData: { data },
        fetchingDeviceStarted: false,
        fetchingDeviceResolved: true,
        fetchingDeviceError: null
      };
    }
    case actionTypes.UPDATE_ACTIVE_DEVICE: {
      const { data } = action.payload;
      return {
        ...state,
        activeDevice: [data],
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: true,
        fetchingInfusionError: null
      };
    }
    case actionTypes.FETCHING_DEVICE_REJECTED: {
      const { message } = action.payload; // Error message.
      return {
        ...state,
        fetchingDeviceStarted: false,
        fetchingDeviceResolved: false,
        fetchingDeviceError: message
      };
    }
    case actionTypes.STOP_ASYNC_FETCHING_DEVICE: {
      return {
        ...state,
        fetchingDeviceStarted: false,
        fetchingDeviceResolved: false,
        fetchingDeviceError: null
      };
    }
    default: {
      return state;
    }
  }
};
