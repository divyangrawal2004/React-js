import React from 'react'

const Banner = () => {
  return (
    <div>
         {/* Banner Section */} 
         <section className="banner">
        <div className="banner-image">
          <img
            src="https://images.meesho.com/images/marketing/1744783895378.webp"
            alt="Banner"
            style={{ width: "100%" }}
          />
        </div>
        <div className="banner-text">
          <h1>
            Smart Shopping
            <br />
            Trusted by Millions
          </h1>
          <p>
            <button className="btn">Shop Now</button>
          </p>
        </div>
      </section>

    
      <div className="features">
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/1828/1828665.png" alt=""  width={20}/>{" "}7 Days Easy Return </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/929/929415.png"  alt=""  width={20}  />{" "} Cash on Delivery</div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/633/633652.png" alt=""   width={20} />{" "}  Lowest Prices  </div>
      </div>
    </div>
  )
}

export default Banner
