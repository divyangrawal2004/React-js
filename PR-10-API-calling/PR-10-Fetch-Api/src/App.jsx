
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_CART } from "./Redux/Action/CartAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GET_CART());
  }, []);

  const Carts = useSelector((state) => state.cartData.cart);

  return (
    <div align="center">
      <h1>API Fetch Method Calling</h1>
      <table border={1} cellPadding={10} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>UserId</th>
            <th>Products</th>
            <th>Total</th>
            <th>Discount Total</th>
          </tr>
        </thead>
        <tbody align="center">
          {Carts.map((val, index) => {
            const { id, userId, products, total, discountedTotal } = val;
            return (
              <tr key={index}>
                <td>{id}</td>
                <td>{userId}</td>
                <td>
                  <table border={1} cellPadding={5} align="center">
                    <thead>
                      <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Discount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((prod, i) => (
                        <tr key={i}>
                          <td>{prod.id}</td>
                          <td>{prod.title}</td>
                          <td>{prod.description}</td>
                          <td>{prod.price}</td>
                          <td>{prod.discountPercentage}%</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </td>
                <td>{total}</td>
                <td>{discountedTotal}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
