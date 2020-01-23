import { Provider } from "react-redux";
import * as React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { App } from "./components/app";
import * as serviceWorker from "./service-worker";
import "./assets/styles/global/global.scss";

serviceWorker.register();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
