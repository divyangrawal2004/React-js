import React, { useState } from "react";
import { categories } from "../data";// Assuming you will have a separate CSS file for styling

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  return (
    <div style={{ padding:"20px" }}>
      <header>
        <nav className="menu-container d-flex">
          {categories.map((val, index) => (
           <div
           key={index}
           className="menu-item"
           onMouseEnter={() => setActiveCategory(val.category)}
           onMouseLeave={() => setActiveCategory(null)}
         >
           <ul style={{ listStyle: "none" }}>
             <li className="menu-category">{val.category}</li>
           </ul>
         
           {/* Dropdown Submenu */}
           {activeCategory === val.category && val.items && (
             <div className="submenu">
               {val.items.map((item, idx) => (
                 <div key={idx} className="submenu-item">
                   <strong>{item.subCategory}</strong>
                   <ul>
                     {item.products.map((product, pIndex) => (
                       <li key={pIndex}>{product}</li>
                     ))}
                   </ul>
                 </div>
               ))}
             </div>
           )}
         </div>
         
          ))}
        </nav>
      </header>
    </div>
  );
};

export default Menu;
