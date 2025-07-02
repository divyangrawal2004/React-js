import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART } from "./Redux/Action/CartAction";

const App = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cartData.cart);

  useEffect(() => {
    dispatch(GET_CART());
  }, [dispatch]);

  if (cartData.length === 0) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1 align="center">Redux Thunk with Axios Cart Data</h1>
      <table border={1} align="center" cellPadding={10}>
        <thead>
          <tr>
            <th>Cart ID</th>
            <th>Total Products</th>
            <th>Total Price</th>
            <th>User ID</th>
          </tr>
        </thead>
        <tbody align="center">
          {
            cartData.map((cart) => (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>{cart.totalProducts}</td>
                <td>{cart.total}</td>
                <td>{cart.userId}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  );
};

export default App;
