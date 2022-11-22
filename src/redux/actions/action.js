

import types from "../types";

export function ADD_NOTE (data) {
    return{
        type:types.ADD_NOTE,
        payload:data
    }
}
