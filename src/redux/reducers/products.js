import types from "../types";

let init_state ={
    homeData:[]
}

export default function(state=init_state,action){
    switch(action.type){
        case types.HOME_PRODUCTS:{
            let data =action.payload
            console.log("Increment reducer call",data)
        }
         default :
         return {...state}
    }
}