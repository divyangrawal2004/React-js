import { combineReducers } from "redux";
import counter from "./CounterReducer";

const rootReducre = combineReducers({
    count : counter
})
export default rootReducre