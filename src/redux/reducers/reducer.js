import AsyncStorage from "@react-native-async-storage/async-storage";
import types from "../types";

let init_state = {
    add: []
}
const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      console.log("value in asyncstorage============",jsonValue)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
    console.log("eroorrrrrrrr",e)
    }
  }

export function combineReducer(state = init_state, action) {
console.log("data in reducer",action.payload)
    switch (action.type) {
        case types.ADD_NOTE: {
            let data=action.payload
            let newArr = [...state.add,data]
            storeData(newArr)
            return{...state,add:newArr}
        }
        default:
            return{
                ...state
            }
    }



}