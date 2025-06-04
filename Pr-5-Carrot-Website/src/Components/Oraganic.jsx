import React from "react";
import { Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import "./Oraganic.css"; // Custom CSS for extra styling if needed

const ProductPromoSection = () => {
  const products = [
     {
      id: 1,
      name: "Fresh organic villa farm lemon 500gm pack",
      category: "vegetables",
      price: 120.25,
      oldPrice: 123.25,
      rating: 4.5,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/1.jpg",
    },
    {
      id: 2,
      name: "Best snakes with hazel nut pack 200gm",
      category: "snacks",
      price: 145,
      oldPrice: 150,
      rating: 5.0,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/9.jpg",
    },
    {
      id: 3,
      name: "Fresh organic apple 1kg simla marming",
      category: "fruits",
      price: 120.25,
      oldPrice: 123.25,
      rating: 4.5,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/2.jpg",
    }
  ];

  return (
    <div className="container py-4">
      <div className="row">
        {/* Product Cards */}
        <div className="col-lg-8 d-flex flex-wrap gap-3 justify-content-between">
       <div className="product-grid" style={{ display: "grid", gap: "20px", flex: 1 }}>

                  {products.map((item) => (
                    <div
                      key={item.id}
                      style={{
                        border: "1px solid #eee",
                        borderRadius: "10px",
                        width: "250px",
                        padding: "10px",
                        textAlign: "center",
                        boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                        minHeight:
                          "350px" /* ✅ FIX: Set minimum height to keep consistent box size */,
                        maxHeight: "350px" /* ✅ FIX: Prevent extra-large box issue */,
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                      }}
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        style={{ width: "100%", height: "150px", objectFit: "contain" }}
                      />
        
                      <p style={{ color: "#666", fontSize: "13px" }}>
                        {item.category.toUpperCase()}
                      </p>
        
                      <div style={{ color: "#f5885f" }}>
                        {Array.from({ length: Math.floor(item.rating) }).map((_, i) => (
                          <FaStar key={`full-${i}`} />
                        ))}
        
                        {item.rating % 1 >= 0.5 && <FaRegStarHalfStroke />}
        
                        <span
                          style={{
                            color: "#666",
                            fontSize: "12px",
                            marginLeft: "8px",
                          }}
                        >
                          ({item.rating})
                        </span>
                      </div>
        
                      <h5
                        style={{
                          fontSize: "16px",
                          fontWeight: "500",
                          margin: "10px 0",
                        }}
                      >
                        {item.name}
                      </h5>
        
                      <p
                        style={{
                          color: "#64b496",
                          fontSize: "18px",
                          fontWeight: "700",
                        }}
                      >  ${item.price}  <del style={{   color: "#999",    marginLeft: "15px",  fontSize: "14px",   fontWeight: "500",  }} >  ${item.oldPrice} </del>  </p>
                    </div>
                  ))}
                </div>
        </div>

        {/* Promo Image Section */}
       <div className="col-lg-4 mt-4 mt-lg-0 position-relative">
  <img
    src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg"
    alt="Promotion"
    className="img-fluid rounded"
    style={{ height: "100%",width:"500px", objectFit: "cover" }}
  />

  <div className="promo-overlay p-4 text-black text-end">
    <h2 className="fw-bold fs-2">
      Organic & Healthy <br />
      <span>Vegetables</span>
    </h2>
    <h3 className="fs-4 fw-semibold mt-2">25% OFF</h3>
    <div className="mt-3">
      <Button variant="success" className="px-4 py-2">
        Shop Now
      </Button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
};

export default ProductPromoSection;
