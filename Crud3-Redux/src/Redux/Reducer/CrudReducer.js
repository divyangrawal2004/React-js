const initialState = {
    Data : JSON.parse(localStorage.getItem("users")) || []
}

const CrudReducer = (state = initialState,action) => {
    switch(action.type) {
        case "ADD_USER":
            const users = action.payload
            localStorage.setItem("users",JSON.stringify(users))
            return{
                ...state,
                Data : users
            }

        case "Delete_User" : 
        const deleteUser = state.Data.filter((val) => val.id !== action.payload)
        localStorage.setItem("users", JSON.stringify(deleteUser))
        return{
            ...state,
            Data : deleteUser
        }

        case "Edit_User" : 
             const editUser = state.Data.map((val) => {
            if(val.id === action.payload.id){
                return action.payload
            }
            else{
                return val
            }
           
        })
        
       
         localStorage.setItem("users", JSON.stringify(editUser))
            return {
                ...state,
                Data : editUser
            }
        default:
            return state
    }
}
export default CrudReducer