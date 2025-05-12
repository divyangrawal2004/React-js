import { useState } from "react";
import { categaryes, product } from "./data";

function App() {
  const [data, setData] = useState(product);
  const filterData = (categaryes) => {
    if (categaryes === "all") {
      setData(product);
    } else {
      const filter = product.filter((val) => {
        return val.categary === categaryes;
      });
      setData(filter);
    }
  };

  return (
    < div align="center">
      <button onClick={() => filterData("all")}>ALL</button>
      {categaryes.map((val) => {
        const { id, name } = val;
        return <button onClick={() => filterData(name)}>{name}</button>;
      })}

      <table border={1} align="center">
        <thead>
          <tr>
            <th>Id</th>
            <th>items</th>
            <th>Categary</th>
          </tr>
        </thead>

        <br />
        {data.map((val) => {
          return (
            <>
              <tr>
                <td>{val.id}</td>
                <td>{val.item}</td>
                <td>{val.categary}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
}

export default App;
