import { thunk } from "redux-thunk";
import rootReducer from "./src/Redux/Action/IndexReducer";
import {applyMiddleware, createStore} from "redux"

const store = createStore (rootReducer , applyMiddleware(thunk) )

export default store