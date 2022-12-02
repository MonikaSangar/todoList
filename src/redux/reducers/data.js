import types from "../types";

let init_state ={
    homeData:[]
}
const UserData =(state=init_state,action)=>{
    switch(action.types){
        case types.USERDATA:{

        }
        default:
            return{...state}
    }
}
export default UserData