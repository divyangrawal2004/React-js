import React from 'react';
import './Header.css'; // Optional CSS if needed

const categories = [
  {
    name: 'Ethnic Wear',
    image: 'https://images.meesho.com/images/marketing/1744634654837.webp',
  },
  {
    name: 'Western Dresses',
    image: 'https://images.meesho.com/images/marketing/1744634725496.webp',
  },
  {
    name: 'Menswear',
    image: 'https://images.meesho.com/images/marketing/1744634780426.webp',
  },
  {
    name: 'Footwear',
    image: 'https://images.meesho.com/images/marketing/1744634814643.webp',
  },
  {
    name: 'Home Decor',
    image: 'https://images.meesho.com/images/marketing/1744634835018.webp',
  },
  {
    name: 'Beauty',
    image: 'https://images.meesho.com/images/marketing/1744634871107.webp',
  },
  {
    name: 'Accessories',
    image: 'https://images.meesho.com/images/marketing/1744634909968.webp',
  },
  {
    name: 'Grocery',
    image: 'https://images.meesho.com/images/marketing/1744634937295.webp',
  },
];

const Categories = () => {
  return (
    <div className="categories-container" style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', padding: '20px 0' }}>
      {categories.map((cat, index) => (
        <div key={index} style={{ textAlign: 'center', margin: '10px' }}>
          <img
            src={cat.image}
            alt={cat.name}
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '5%',
              padding: '10px',
              objectFit: 'contain',
            }}
          />
          <p style={{ marginTop: '10px', fontSize: '16px' }}>{cat.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Categories;
