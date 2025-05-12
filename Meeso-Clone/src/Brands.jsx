import React from 'react';
import './Header.css';

const brands = [
  {
    name: 'Personal Care',
    image: 'https://images.meesho.com/images/marketing/1744635542873.webp',
  },
  {
    name: 'Electronics',
    image: 'https://images.meesho.com/images/marketing/1744635521751.webp',
  },
  {
    name: 'Makeup',
    image: 'https://images.meesho.com/images/marketing/1744635497001.webp',
  },
  {
    name: 'Smart Phones',
    image: 'https://images.meesho.com/images/marketing/1744635464683.webp',
  },
  {
    name: 'Men Perfume',
    image: 'https://images.meesho.com/images/marketing/1744635432891.webp',
  },
  {
    name: 'Bags',
    image: 'https://images.meesho.com/images/marketing/1744635402151.webp',
  },
  {
    name: 'Footwear',
    image:'https://images.meesho.com/images/marketing/1744635614888.webp'
  },
  {
    name : 'Books',
    image:'https://images.meesho.com/images/marketing/1744635646070.webp'
  }
];

const Brands = () => {
  return (
    <div className="original-brands-section">
      <div className="brands-header">
        <h2>Original Brands <span className="verified">✔️</span></h2>
        <a href="" className="view-all">View All →</a>
      </div>
      <div className="brands-slider">
        {brands.map((brand, index) => (
          <div className="brand-card" key={index}>
            <img src={brand.image} alt={brand.name} />
            {/* <div className="brand-name">{brand.name}</div> */}
          </div>
        ))}

      </div>
    </div>
  );
};

export default Brands;


