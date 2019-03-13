import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { createStore } from "redux"; //STEP 1
import { Provider } from "react-redux"; // STEP 2
import movieReducer from "./store/reducers/movie"; //STEP 3
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = createStore(movieReducer); //STEP 4

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
