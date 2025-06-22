import {combineReducers} from 'redux'
import Post_Reducer from './PostReducer'
const rootReducer = combineReducers ({
    postdata : Post_Reducer
})
export default rootReducer  