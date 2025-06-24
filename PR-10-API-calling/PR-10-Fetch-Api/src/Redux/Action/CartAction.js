const GET_CART = () => {
    return async(dispatch) => {
        try{

            let data = await fetch (`https://dummyjson.com/carts`);
            method : "GET"
            Headers : {"Content-type : application/jsom"}

            let res = await data.json()
            console.log(res.carts);

            dispatch({
                type : "GET_CART",
                payload : res.carts
            })
            

        }catch(err) {
            console.log(err);
            return false
            
        }
    }
}
export {GET_CART}