import { createStore } from "redux";
import { combineReducer } from "./reducer";
import types from "./types";

const store = createStore(combineReducer)





export default store;

