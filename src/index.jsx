import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import "bootstrap/scss/bootstrap.scss";
import App from "./app/containers/App/App";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import configureStore from "@store/store";

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
