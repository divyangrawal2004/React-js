import { combineReducers } from "redux";
import CartReducer from "./CartReducer";

const RootReducer = combineReducers({
    cartData : CartReducer
})

export default RootReducer