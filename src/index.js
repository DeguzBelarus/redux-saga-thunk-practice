import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootReducer } from "../src/redux/rootReducer";
import { sagaWatcher } from "./redux/sagas";

import App from "./App";
import "./index.scss";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(sagaMiddleware, thunkMiddleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

sagaMiddleware.run(sagaWatcher);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

const root = createRoot(document.getElementById("root"));
root.render(app);

reportWebVitals();
