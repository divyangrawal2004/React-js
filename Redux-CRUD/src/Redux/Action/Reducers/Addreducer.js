let initialState = {
    users: JSON.parse(localStorage.getItem('users')) || [],
    single: null

}

const Addreducer = (state = initialState, action) => {
    switch (action.type) {
        case 'Add_User':
            let oldRecord = [...state.users, action.payload];
            localStorage.setItem('users', JSON.stringify(oldRecord));
            return {
                ...state,
                users: oldRecord
            }
        case 'Delete_User':
            let deleteUser = (id) => {
                let newRecord = state.users.filter((item) => item.id !== id)
                localStorage.setItem('users', JSON.stringify(newRecord));
                return newRecord
            }
            return {
                ...state,
                users: deleteUser(action.payload)
            }

        case 'Edit_User':
            let singleData = state.users.find((val) => val.id === action.payload)
            return {
                ...state,
                single: singleData
            }

        case 'Update_User':
            let up = state.users.map((val) => {
                if (val.id === action.payload.id) {  // ✅ Corrected id check
                    return { 
                        ...val,
                         ...action.payload };
                }
                return val;
            });
            localStorage.setItem('users', JSON.stringify(up));
            return {
                ...state,
                users: up
            }


        default:
            return state
    }
}

export default Addreducer

