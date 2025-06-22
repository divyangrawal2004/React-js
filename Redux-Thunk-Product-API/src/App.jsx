import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_PRODUCT } from "./Redux/Action/ProductAction";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GET_PRODUCT());
  }, []);

  const Product = useSelector((state) => state.productData.product); //store ke under data pda hai uske under se data lene ke lia useSelecer hook ka use ho rha h
  //ye state.productData hume indextreducer mai e mil rhaa h uske under product mai data lene ke lia useSelector hook ka use kr rhe h
  return (
    <div align="center">
      <h1>Product API Calling</h1>
      <table border={1}>
        <thead>
          <th>ID</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Thumbnail</th>
        </thead>
        <tbody align="center">
          {Product.map((e) => {
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.title}</td>
                <td>{e.price}</td>
                <td>{e.category}</td>
                <td>
                  <img src={e.thumbnail} alt="" style={{ width: "100px" }} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
