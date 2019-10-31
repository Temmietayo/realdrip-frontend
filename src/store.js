import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import authReducers from "./reducers/user/index";
import dashboardReducer from "./reducers/dashboard/index";
import infusionReducer from "./reducers/infusion/index";
import nursesReducer from "./reducers/nurse/index";
import deviceReducer from "./reducers/device/index";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    deviceReducer,
    infusionReducer,
    nursesReducer,
    authReducers,
    dashboardReducer
  });
  const enhancer = compose(middleware);
  return createStore(rootReducer, initialState, enhancer);
}
