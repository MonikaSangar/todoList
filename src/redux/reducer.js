import types from "./types";
let init_state = {
    add: []
}

export function combineReducer(state = init_state, action) {
console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.ADD_NOTE: {
            let data=action.payload
            let newArr = [...state.add,data]
            return{...state,add:newArr}
        }
        default:
            return{
                ...state
            }
    }



}