import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { combineReducer } from "./reducers/reducer";



const middlewares=[thunk]


const store = createStore(combineReducer,applyMiddleware(...middlewares))





export default store;

