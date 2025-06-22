
import {combineReducers} from "redux"
import ProductReducer from "./ProductReducer"

const rootReducer = combineReducers ({
    productData : ProductReducer
})

export default rootReducer