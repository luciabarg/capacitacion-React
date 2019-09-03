import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import get from "lodash/get";
import reducer from "./reducer";

const emptyHOC = WrappedComponent => WrappedComponent;
const enhancer = compose(
  applyMiddleware(thunk),
  get(window, "__REDUX_DEVTOOLS_EXTENSION__", null)
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : emptyHOC
);

const store = createStore(reducer, enhancer);

export { store };
