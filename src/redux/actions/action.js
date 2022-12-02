

import types from "../types";

export function USERDATA (data) {
    return{
        type:types.USERDATA,
        payload:data
    }
}
