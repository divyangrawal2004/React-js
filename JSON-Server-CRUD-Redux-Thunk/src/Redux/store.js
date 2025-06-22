import { applyMiddleware, createStore } from "redux";
import rootReducer from "./Reducer/IndexReducer";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store