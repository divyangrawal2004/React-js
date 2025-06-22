const ADD_USER = (allData) => {
    return {
        type : "ADD_USER",
        payload : allData
    }
}

const Delete_User = (id) => {
    return {
        type : "Delete_User",
        payload : id

    }
}

const Edit_User = (formInput) => {
    return {
        type : "Edit_User",
        payload : formInput
    }
    
}
export {ADD_USER , Delete_User, Edit_User}