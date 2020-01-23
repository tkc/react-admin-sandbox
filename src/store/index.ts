import { applyMiddleware, createStore, compose } from "redux";
import { createBrowserHistory as createHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";
import { reducers } from "../reducers";
export const history = createHistory();

const composeEnhancers = compose;
const storeCondition = createStore(
  connectRouter(history)(reducers),
  composeEnhancers(applyMiddleware(routerMiddleware(history))),
);

export const store = storeCondition;
