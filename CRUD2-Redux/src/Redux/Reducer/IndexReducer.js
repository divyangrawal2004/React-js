import {combineReducers} from 'redux'
import CrudReducer from './CrudReducer'


const RootReducer = combineReducers({
    crud: CrudReducer
})

export default RootReducer