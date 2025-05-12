import React from 'react';
import './Header.css';

const brands = [
  {
    name: 'Himalaya',
    image: 'https://images.meesho.com/images/marketing/1743159415385.webp',
  },
  {
    name: 'MI',
    image: 'https://images.meesho.com/images/marketing/1744636558884.webp',
  },
  {
    name: 'Bata',
    image: 'https://images.meesho.com/images/marketing/1744636599446.webp',
  },
  {
    name: 'WOW',
    image: 'https://images.meesho.com/images/marketing/1743159302944.webp',
  },
  {
    name: 'Mamaearth',
    image: 'https://images.meesho.com/images/marketing/1743159322237.webp',
  },
  {
    name: 'Wild Stone',
    image: 'https://images.meesho.com/images/marketing/1743159363205.webp',
  },
  {
    name: 'Plum',
    image: 'https://images.meesho.com/images/marketing/1743159377598.webp',
  },
  {
    name:'Nivea',
    image:'https://images.meesho.com/images/marketing/1743159393231.webp'
  }
];

const Marquee = () => {
  return (
    <div className="marquee-container">
      <div className="marquee-content">
        {brands.map((brand, index) => (
          <div className="marquee-item" key={index}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {brands.map((brand, index) => (
          <div className="marquee-item" key={`dup-${index}`}>
            <img src={brand.image} alt={brand.name} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
