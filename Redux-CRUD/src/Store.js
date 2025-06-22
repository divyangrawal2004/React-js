import { createStore } from "redux";
import rootReducer from "./Redux/Action/Reducers/Indexreducer";

const store = createStore(rootReducer)

export default store;

