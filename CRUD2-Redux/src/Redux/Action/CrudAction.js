const ADD_DATA = (allData ) => {
    return {
        type : "ADD_DATA",
        payload : allData
        // payload : allData
    }
    
}

const DELETE_USER = (id) => {
    // console.log(id);
    
    return{
        type : "DELETE_USER",
        payload : id
    }
}

const EDIT_USER = (formInput) => {
    return {
        type : "EDIT_USER",
        payload : formInput
    }
}
export {ADD_DATA , DELETE_USER , EDIT_USER}