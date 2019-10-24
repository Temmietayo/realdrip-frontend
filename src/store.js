import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";

import reducers from "./reducers/user";
import {
  fetchDeviceReducer,
  fetchInfusionReducer,
  fetchNursesReducer
} from "./reducers/dashboard";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers,
    fetchDeviceReducer,
    fetchInfusionReducer,
    fetchNursesReducer
  });
  const enhancer = compose(middleware);
  return createStore(rootReducer, initialState, enhancer);
}
