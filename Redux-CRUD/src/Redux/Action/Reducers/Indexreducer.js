import { combineReducers } from "redux";
import Addreducer from "./Addreducer";

const rootReducer = combineReducers({
    add : Addreducer
})

export default rootReducer