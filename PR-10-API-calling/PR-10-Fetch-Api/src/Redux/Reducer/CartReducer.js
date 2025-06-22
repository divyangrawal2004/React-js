const initialState = {
    cart : []
}

const CartReducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_CART":
            return {
                ...state,
                cart : action.payload
            }
        default:
            return state
    }
}

export default CartReducer