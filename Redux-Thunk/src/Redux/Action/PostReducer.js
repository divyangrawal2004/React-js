let initialState = {
    posts : []
}

const Post_Reducer = (state = initialState,action) => {
    switch(action.type){
        case "Get_Post" : 
        return {
            ...state,
            posts : action.payload
        }
        default : 
        return state
    }
}
export default Post_Reducer