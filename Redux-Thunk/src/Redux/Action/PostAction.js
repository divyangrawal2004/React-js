const Get_Post = () => {
   return async (dispatch) => {
    try{
        let data = await fetch('https://dummyjson.com/posts')
        method : 'GET'
        Headers : {'conten-type : application/JSON'}

        let res = await data.json();
        console.log(res.posts);

        dispatch ({
            type : 'Get_Post',
            payload : res.posts
        })
        

    }catch(err) {
        console.log(err);
        return false
        
    }
   }
}
export {Get_Post}