import { combineReducers } from "redux";
import CrudReducer from "./CrudReducer";

const RootReducer = combineReducers({
    notes : CrudReducer
})

export default RootReducer