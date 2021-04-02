import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers/reducer";
import thunk from "redux-thunk";

const enableReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__?.();

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk), enableReduxDevTools)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
