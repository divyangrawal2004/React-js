const AuthAction = (userdata) => {
    return async(dispatch) => {
        try{
            let data = await fetch("http://localhost:9000/users",{
                  method : "POST",
            headers : {"Context-Type"  : "application/json"},
             body : JSON.stringify(userdata)
            })
          
           
            let res = await data.json()
            console.log(res);

            dispatch({type : 'registeruser',payload : res})
    
        }catch(err) {
            console.log(err);
            return false
            
        }
    }
}

export { AuthAction }