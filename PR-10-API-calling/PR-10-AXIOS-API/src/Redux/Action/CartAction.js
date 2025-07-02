import axios from "axios";

const GET_CART = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get("https://dummyjson.com/carts");
      dispatch({
        type: "GET_CART",
        payload: res.data.carts
      });
    } catch (err) {
      console.log("Error fetching cart:", err);
    }
  };
};

export { GET_CART };
