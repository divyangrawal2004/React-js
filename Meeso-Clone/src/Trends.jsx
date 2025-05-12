import React from 'react';
import './Header.css';

const Trendz = () => {
  const products = [
    {
      name: 'Summer Dresses',
      image: 'https://images.meesho.com/images/marketing/1744635893307.webp',
    },
    {
      name: 'Baggy Jeans',
      image: 'https://images.meesho.com/images/marketing/1744635812270.webp',
    },
    {
      name: 'Earrings',
      image: 'https://images.meesho.com/images/marketing/1744635870215.webp',
    },
    {
      name: 'Chic Flats',
      image: 'https://images.meesho.com/images/marketing/1744635846873.webp',
    },
  ];

  return (
    <div className="trendz-container">
      <div className="left-panel">
        <button className="shop-btn">Shop Now</button>
      </div>

      <div className="right-panel">
        {products.map((product, index) => (
          <div className="card" key={index}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trendz;
