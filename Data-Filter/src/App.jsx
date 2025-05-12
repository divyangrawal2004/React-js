import { categary , products } from "./data";
import { useState } from "react";

function App  () {
  const[data , setData] = useState([]);

  const filterData = (categary) => {
    if(categary === "All")
    {
      setData(products);
    }else{
      const filter = products.filter((val) => val.categary === categary)
      setData(filter);
    }

  }

  return (
    <div align="center">
      <h1>Filter App</h1>
      <button onClick={() => filterData("All")}>All</button>
      {
        categary.map((cat) => {
          const {id,name} = cat;
          return(
            <div key={id} style={{display:"inline-block" , margin: "5px"}}>
              <button onClick={ () => filterData(name)}>{name}</button>
            </div>
          )
        })
      }

      <br/><br/>
      <table border={1} cellPadding={8}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Categary</th>
          </tr>
        </thead>
        <tbody align="center">
          {
             data.length === 0  ? (
              products.map((val,index) => {
                const {id,name,categary} = val;
                return(
                  <tr key={index}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{categary}</td> 
                  </tr>
                )
              })
              
             ) : (
              data.map((val,i) => {
                const {id,name,categary} = val;
                return(
                  <tr key={i}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{categary}</td>
                  </tr>
                )
              })
             )
          }
        </tbody>
      </table>
    </div>
  );
};

export default App;