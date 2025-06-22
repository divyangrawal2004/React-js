const initialState = {
    data : JSON.parse(localStorage.getItem('users')) || []
}

const CrudReducer = (state = initialState,action) => {
    switch(action.type) {
        case "ADD_DATA" : {
          
            const users = action.payload
            localStorage.setItem('users',JSON.stringify(users))
        
            return {
                ...state ,
                data : users
              
            }
        }

        case "DELETE_USER" : {
            const deleteUser = state.data.filter((val) => {
                return val.id !== action.payload
            })
            localStorage.setItem("users",JSON.stringify(deleteUser))
            return {
                ...state,
                data : deleteUser
            }
        }

        case "EDIT_USER" : {
            const editUser = state.data.map((val) => {
                if(val.id == action.payload.id) {
                    return action.payload
                }
                return val;
            })
            localStorage.setItem("users", JSON.stringify(editUser))
            return {
                ...state,
                data : editUser
            }
        }
        default : {
            return state
        }
    }
}

export default CrudReducer