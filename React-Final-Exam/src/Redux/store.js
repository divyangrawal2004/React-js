import { createStore, applyMiddleware } from "redux";
import rootReducer from "./Reducers/IndexReducer";
import { thunk } from "redux-thunk";

 const store = createStore(rootReducer, applyMiddleware(thunk));

 export default store

