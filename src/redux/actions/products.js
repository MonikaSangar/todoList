import { apiGet } from "../../Screens/utils/utils";
import types from "../types";

import store from "../store";
import { PRODUCT, PRODUCTDETAIL } from "../../config/urls";



export const HOME_PRODUCTS=()=>{
    return new Promise(function(resolve,reject){
        apiGet(PRODUCT + query).then((res)=>{
            console.log("res in actions",res)
            store.dispatch({type:types.HOME_PRODUCTS,payload:res.products})
            return resolve(res)
        }).catch((error)=>{
            return reject(error)
        })
    })
}

export const PRODUCT=(id)=>{
    return new Promise(function(resolve,reject){
        apiGet(PRODUCTDETAIL + `/${id}`).then((res)=>{
            return resolve(res)
        }).catch((error)=>{
            return reject(error)
        })
    })
}
