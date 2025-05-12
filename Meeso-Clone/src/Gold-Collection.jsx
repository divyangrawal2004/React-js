import React from 'react';
import './Header.css';

const GoldBanner = () => {
  return (
    <div className="gold-banner">
      <div className="gold-content">
        {/* <h1 className="gold-title">✨Gold</h1>
        <p className="gold-subtitle">Products you Love. Quality we Trust.</p> */}
        <button className="shop-now">Shop Now</button>
      </div>

      <div className="gold-categories">
        <div className="category">
          <img src="https://images.meesho.com/images/marketing/1744722796811.webp" alt="Lehengas" />
          <span>Lehengas</span>
        </div>
        <div className="category">
          <img src="https://images.meesho.com/images/marketing/1744635113661.webp" alt="Menwear" />
          <span>Menwear</span>
        </div>
        <div className="category">
          <img src="https://images.meesho.com/images/marketing/1744635139351.webp" alt="Sarees" />
          <span>Sarees</span>
        </div>
        <div className="category">
          <img src="https://images.meesho.com/images/marketing/1744635189897.webp" alt="Jewellery" />
          <span>Jewellery</span>
        </div>
      </div>
    </div>
  );
};

export default GoldBanner;
