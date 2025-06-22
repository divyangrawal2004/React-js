const initialState = {
    notes :  JSON.parse(localStorage.getItem("notes")) || []
}

const CrudReducer = (state = initialState, action) => {
    switch(action.type) {
        case "ADD_NOTE" : {
            let users = action.payload
            localStorage.setItem("notes", JSON.stringify(users))
            return {
                ...state,
                notes : users
            }
        }

        case "DELETE_NOTE" : {
            let DeleteUser = state.notes.filter((item) => item.id !== action.payload)
            alert("Note Deleted Successfully")
            localStorage.setItem("notes", JSON.stringify(DeleteUser))
            return {
                ...state,
                notes : DeleteUser
            }
        }

        case "EDIT_NOTE" : {
            let editUser = state.notes.map((val) => {
                if(val.id == action.payload.id){
                     return  action.payload
                }
               return val
            })
            localStorage.setItem("notes",JSON.stringify(editUser))
            return {
                ...state,
                notes : editUser
            }
        }

        default : {
            return state
        }
    }
}

export default CrudReducer;