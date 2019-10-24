import { combineReducers } from "redux";
import {
  fetchDeviceReducer,
  fetchInfusionReducer,
  fetchNursesReducer
} from "./dashboard/index";
import authReducers from "./user/index";

export default combineReducers({
  authReducers,
  fetchDeviceReducer,
  fetchInfusionReducer,
  fetchNursesReducer
});
