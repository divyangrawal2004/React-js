import { combineReducers } from "redux"
import CrudReducer from "./CrudReducer"
const rootReducer = combineReducers({
    CrudData : CrudReducer
})

export default rootReducer