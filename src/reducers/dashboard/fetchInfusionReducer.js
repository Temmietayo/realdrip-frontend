import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  apiBaseUrl: null,
  fetchingInfusionStarted: false,
  fetchingInfusionResolved: false,
  fetchingInfusionError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_ACTIVE_INFUSION_STARTED: {
      return {
        ...state,
        fetchingInfusionStarted: true,
        fetchingInfusionResolved: false,
        fetchingInfusionError: null,
      };
    }
    case actionTypes.FETCHING_ACTIVE_INFUSION_RESOLVED: {
      const { url } = action.payload;
      return {
        ...state,
        apiBaseUrl = url,
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: true,
        fetchingInfusionError: null,
      };
    }
    case actionTypes.FETCHING_ACTIVE_INFUSION_REJECTED: {
      const { message } = action.payload; // Error message.
      return {
        ...state,
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: false,
        fetchingInfusionError: message,
      };
    }
    case actionTypes.STOP_ASYNC_FETCHING_INFUSION: {
      return {
        ...state,
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: false,
        fetchingInfusionError: null,
      };
    }
    default: {
      return state;
    }
  }
};
