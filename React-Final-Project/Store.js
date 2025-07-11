import { applyMiddleware, createStore } from "redux";
import rootReducer from "./src/Redux/Action/Reducers/AuthIndex";
import { thunk } from "redux-thunk";

const store = createStore(rootReducer,applyMiddleware(thunk))

export default store