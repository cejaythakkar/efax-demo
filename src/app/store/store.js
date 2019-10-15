import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import reducerRegistry from "../reducer-registry";

export default () => {
  let composeEnhancers = compose;

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  if (process.env.NODE_ENV !== "production" && typeof window === "object") {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const middlewares = [thunkMiddleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const reducer = combineReducers(reducerRegistry.getReducers());
  const store = createStore(reducer, composeEnhancers(...enhancers));

  return store;
};
