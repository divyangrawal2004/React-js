import { createStore } from "redux";
import rootReducer from "./Reducer/IndexReducer";

const store = createStore(rootReducer)
export default store