let initialstate = {
    users : []
}

const AuthReducer = (state = initialstate,action) => {
    switch(action.type) {
        case 'registeruser' :
            return {
                ...state,
                users : [...state.users,action.payload]
            }
        default :
            return state
    }
}

export default AuthReducer