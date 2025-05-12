import React from "react";
import { category, product } from "./Data";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Menu = ({findCategary, setFindCategary}) => {
  const [data, setData] = useState(product);
  const [selectedCategory, setSelectedCategory] = useState(null); 

  const filterData = (category) => {
    const filterdata = product.filter((val) => val.category === category);
    setData(filterdata);
    setFindCategary(category);
    setSelectedCategory(category);
    // console.log(data);
  };
  return (
    <div>
      {/* Category Buttons */}

      <div className="d-flex justify-content-center flex-wrap mt-3">
        {category.map((val, index) => (
          <button  key={index}  className="btn btn-outline-secondary m-2 px-4 py-2 rounded-pill"  onClick={() => filterData(val.name)} >  {val.name}{" "} </button>
        ))}
      </div>

      {/* Product List */}
      {
        selectedCategory && (
          <div
        style={{  display: "flex",   flexWrap: "wrap",  justifyContent: "center",  gap: "20px",  width: "100%",  marginTop: "20px", }}>

        {data.map((val, index) => {
          return (
            <div  key={index} style={{  border: "1px solid black",  width: "300px", height: "auto",  padding: "10px",  boxSizing: "border-box", borderRadius: "10px", backgroundColor: "#fff",  boxShadow: "0px 2px 8px rgba(0,0,0,0.1)", }} >
              <img  src={val.images} alt={val.title}style={{  width: "100%",  height: "300px",  objectFit: "cover", borderRadius: "10px",  }} />
              {/* <p> <strong>ID:</strong> {val.id} </p> */}
              {/* <p> <strong>Title:</strong> {val.title}  </p>
              <p> <strong>Description:</strong> {val.description}</p>
              <p> <strong>Price:</strong> ₹{val.price}</p>
              <p><strong>Discount:</strong> {val.discountPercentage}</p>
              <p>  <strong>Rating:</strong> {val.rating}   </p>
              <p> <strong>Stock:</strong> {val.stock} </p>
              <p><strong>Brand:</strong> {val.brand}</p> */}
              <p> <strong>Category:</strong> {val.category} </p>
              <p> <strong>Subcategory:</strong> {val.subcategory} </p>
              {/* <p><strong>Thumbnail:</strong> {val.thumbnail}</p> */}
            </div>
          );
        })}
      </div>
        )
      }
    </div>
  );
};

export default Menu;
