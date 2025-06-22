const initialState = {
    users : [],
    error : null,
    singleUser : null
}

const CrudReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_USER" : 
      
        return {
            ...state,
            users : [...state.users , action.payload],
            error : null
        }

        case "View_User" : 
        return {
            ...state,
            users : action.payload,
            error : null
        }

        case "user" : 
        return {
            ...state,
            users : action.payload,
            error : null
        }

            case "delete_User": 
            let deleteRecord = state.users.filter((val => val.id !== action.payload.id))
            // console.log(deleteRecord);
            
            return {
                ...state ,
                users : deleteRecord
            }
            case "delete_Usererror" : 
            return {
                ...state,
                error : action.payload
            }

            case "edit_User" : 
            return {
                ...state,
                singleUserusers : action.payload,
                error : null
            }

            case "Edit_Usererror" : 
            return {
                ...state,
                error : action.payload
            }

            case "Update_User" : 
            let updateRecord = state.users.map((val)=> {
                if(val.id === action.payload.id) {
                    return action.payload
                }else {
                    return val
                }
            })
            return ({
                ...state,
                users : updateRecord
            })

            case "Update_Usererror" : 
            return {
                ...state,
                error : action.payload
            }



        default : 
        return state
    }
}

export default CrudReducer