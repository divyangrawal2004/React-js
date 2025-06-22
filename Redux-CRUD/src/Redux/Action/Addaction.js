const Add_User = (data) => {
    return {
        type : "Add_User",
        payload : data

    }

}

const Delete_User = (id) => {
    return {
        type : "Delete_User",
        payload : id
    }
}

const Edit_User = (id) => {
    return {
        type : "Edit_User",
        payload : id
    }
}
const Update_User = (data) => {
    return {
        type : "Update_User",
        payload : data
    }
    
}
export { Add_User , Delete_User , Update_User , Edit_User}
