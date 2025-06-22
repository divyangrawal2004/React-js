const Add_User = (record) => {
    
    return async (dispatch) => {
        try {
            let data  = await fetch('http://localhost:8000/users',
            {
                method : 'POST',
                headers : {'Content-type' : 'application / json'},
                body : JSON.stringify(record)

            })
            let res = await data.json();
            dispatch ({
                type : "ADD_USER",
                payload : res
            })


        }catch (err){
            dispatch({
                type : "ADD_USER",
                payload : err
            })
        }
    }
}

const Get_User = (record) => {
    
    return async (dispatch) => {
        try {
            let data  = await fetch('http://localhost:8000/users',
            {
                method : 'GET',
                headers : {'Content-type' : 'application / json'},
                body : JSON.stringify(record)

            })
            let res = await data.json();
            dispatch ({
                type : "View_User",
                payload : res
            })


        }catch (err){
            dispatch({
                type : "View_User",
                payload : err
            })
        }
    }
}

const Delete_User = (id) => {
    // console.log(id);   
    return async (dispatch) => {
        try {
            let data  = await fetch(`http://localhost:8000/users/${id}`,
            {
                method : 'DELETE',
                headers : {'Content-type' : 'application / json'},
            })
            let res = await data.json();
            // console.log(res);           
            dispatch ({
                type : "delete_User",
                payload : res
            })
        }catch (err){
            dispatch({
                type : "delete_Usererror",
                payload : err
            })
        }
    } 
}
const Edit_User = (id) => {
    // console.log(id);
    return async (dispatch) => {
        try {
           let data  = await fetch(`http://localhost:8000/users/${id}`,
              {
                method : 'GET',
                headers : {'Content-type' : 'application / json'},
            })
              let res = await data.json();
             dispatch ({
                type : "edit_User",
                payload : res
            })
          
        }catch (err){
            console.log(err);
            dispatch({
                type : "Edit_Usererror",
                payload : err
            })
            

        }
    }
    
    
}

const Update_User = (record) => {
    // console.log(id);
    return async (dispatch) => {
        try {
           let data  = await fetch(`http://localhost:8000/users/${record.id}`,
              {
                method : 'PUT',
                headers : {'Content-type' : 'application/json'},
                body: JSON.stringify(record)

            })
          
              let res = await data.json();
             dispatch ({
                type : "Update_User",
                payload : res
            })
          
        }catch (err){
            console.log(err);
            dispatch({
                type : "Update_Usererror",
                payload : err
            })
            

        }
    }
    
    
}
export {Add_User , Get_User , Delete_User , Edit_User , Update_User}