const ADD_NOTE = (allData) => {
    return {
        type : "ADD_NOTE",
        payload : allData
        
    }
}

const DELETE_NOTE = (id) => {
    return {
        type : "DELETE_NOTE",
        payload : id
    }
}


const EDIT_NOTE = (noteInput) => {
    return {
        type : "EDIT_NOTE",
        payload : noteInput
    }

}

export {ADD_NOTE , DELETE_NOTE , EDIT_NOTE}