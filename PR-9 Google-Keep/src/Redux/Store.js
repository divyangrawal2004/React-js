import { createStore } from "redux";
import RootReducer from "./Reducer/IndexReducer";

const store = createStore(RootReducer)

export default store