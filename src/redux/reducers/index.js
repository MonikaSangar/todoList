import { combineReducers } from "redux";
import UserData from "./data";

import products from "./products";
import { combineReducer } from "./reducer";


const appReducer =combineReducer({
    ...combineReducer,
    ...products,
    ...UserData
})

export default appReducer