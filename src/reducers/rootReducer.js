import { combineReducers } from "redux";
import authReducers from "./user/index";
import dashboardReducer from "./dashboard/index";
import infusionReducer from "./infusion/index";
import nursesReducer from "./nurse/index";
import deviceReducer from "./device/index";

export default combineReducers({
  authReducers,
  deviceReducer,
  infusionReducer,
  nursesReducer,
  dashboardReducer
});
