import { createStore, applyMiddleware, combineReducers } from "redux";
import reducer from "./reducer";

const rootReducer = combineReducers({
  auth: reducer,
});

let store = createStore(rootReducer);

export default store;
