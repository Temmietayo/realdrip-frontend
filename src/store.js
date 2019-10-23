import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from 'redux';

import reducers from "./reducers/user";

let middlewares = [thunk];
const middleware = applyMiddleware(...middlewares);

// const store = createStore(reducer, null, middleware);


// const middleware = [thunkMiddleware, logger];
export default function configureStore(initialState = {}) {
  const rootReducer = combineReducers({
    ...reducers
  });
  const enhancer = compose(
      middleware,
    // window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  return createStore(rootReducer, initialState, enhancer);
}


