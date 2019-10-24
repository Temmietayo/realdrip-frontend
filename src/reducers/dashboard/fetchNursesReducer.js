import * as actionTypes from '../../actions/actionTypes';

const initialState = {
  apiBaseUrl: null,
  fetchingNursesStarted: false,
  fetchingNursesResolved: false,
  fetchingNursesError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_ACTIVE_NURSES_STARTED: {
      return {
        ...state,
        fetchingNursesStarted: true,
        fetchingNursesResolved: false,
        fetchingNursesError: null,
      };
    }
    case actionTypes.FETCHING_ACTIVE_NURSES_RESOLVED: {
      const { url } = action.payload;
      return {
        ...state,
        apiBaseUrl = url,
        fetchingNursesStarted: false,
        fetchingNursesResolved: true,
        fetchingNursesError: null,
      };
    }
    case actionTypes.FETCHING_ACTIVE_NURSES_REJECTED: {
      const { message } = action.payload; // Error message.
      return {
        ...state,
        fetchingNursesStarted: false,
        fetchingNursesResolved: false,
        fetchingNursesError: message,
      };
    }
    case actionTypes.STOP_ASYNC_FETCHING_NURSES: {
      return {
        ...state,
        fetchingNursesStarted: false,
        fetchingNursesResolved: false,
        fetchingNursesError: null,
      };
    }
    default: {
      return state;
    }
  }
};
