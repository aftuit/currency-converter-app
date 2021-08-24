
import { combineReducers } from "redux";
import { convertReducer } from "./convertReducer";

const rootReducer = combineReducers({
    convert: convertReducer
})
export default rootReducer