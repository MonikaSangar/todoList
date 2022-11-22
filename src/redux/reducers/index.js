import { combineReducers } from "redux";
import products from "./products";
import { combineReducer } from "./reducer";


const appReducer =combineReducer({
    ...combineReducer,
    ...products
})

export default appReducer