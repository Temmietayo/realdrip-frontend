import * as actionTypes from "../../actions/actionTypes";

const initialState = {
  InfusionData: {},
  activeInfusion: [],
  activeDevice: [],
  activeNurse: [],
  fetchingInfusionStarted: false,
  fetchingInfusionResolved: false,
  fetchingInfusionError: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_INFUSION_STARTED: {
      return {
        ...state,
        InfusionData: {},
        activeInfusion: [],
        activeDevice: [],
        activeNurse: [],
        fetchingInfusionStarted: true,
        fetchingInfusionResolved: false,
        fetchingInfusionError: null
      };
    }
    case actionTypes.FETCHING_INFUSION_RESOLVED: {
      const { data } = action.payload;
      return {
        ...state,
        InfusionData: { data },
        activeInfusion: [],
        activeDevice: [],
        activeNurse: [],
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: true,
        fetchingInfusionError: null
      };
    }
    case actionTypes.UPDATE_ACTIVE_DATA: {
      const { data } = action.payload;
      return {
        ...state,
        activeInfusion: [data],
        activeDevice: [data],
        activeNurse: [data],
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: true,
        fetchingInfusionError: null
      };
    }
    case actionTypes.FETCHING_INFUSION_REJECTED: {
      const { message } = action.payload; // Error message.
      return {
        ...state,
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: false,
        fetchingInfusionError: message
      };
    }
    case actionTypes.STOP_ASYNC_FETCHING_INFUSION: {
      return {
        ...state,
        fetchingInfusionStarted: false,
        fetchingInfusionResolved: false,
        fetchingInfusionError: null
      };
    }
    default: {
      return state;
    }
  }
};

export const activeInfusion = state => state.activeInfusion;
export const activeDevice = state => state.activeDevice;
export const activeNurse = state => state.activeNurse;
