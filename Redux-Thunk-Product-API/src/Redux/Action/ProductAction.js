const GET_PRODUCT = () => {
  
    return async (dispatch) => {
        try{
            let data = await fetch('https://dummyjson.com/products')
            method : "GET"
            Headers : {'content-type : application/json'}

            let res = await data.json();
            console.log(res.products);

            dispatch({
                type : "GET_PRODUCT",
                payload : res.products
            })
            

        }catch(err){
            console.log(err);
            return false
            
        }
        
    }

  

}
export {GET_PRODUCT}