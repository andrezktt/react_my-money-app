import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import promise from "redux-promise";
import multi from "redux-multi";
import thunk from "redux-thunk";

import Routes from "./main/routes.jsx";
import reducers from "../src/main/reducers.js";

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
const store = applyMiddleware(promise, multi, thunk)(createStore)(reducers, devTools);

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById("app")
);
