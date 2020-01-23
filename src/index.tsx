import { Provider } from "react-redux";
import * as React from "react";
import ReactDOM from "react-dom";
import { store } from "./store";
import { App } from "./components/app";
import * as serviceWorker from "./serviceWorker";
import "./assets/styles/Global/global.scss";

serviceWorker.register();

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));