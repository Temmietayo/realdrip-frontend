import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

import reducer from "./reducers";

let middlewares = [thunk];

const middleware = applyMiddleware(...middlewares);

const store = createStore(reducer, middleware);

export default store;
