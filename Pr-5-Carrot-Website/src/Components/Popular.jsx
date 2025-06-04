import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const Popular = () => {
  const Product = [
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
    },
    {
      id: 4,
      name: "Delicious white baked fresh bread and toast",
      category: "bakery",
      price: 20,
      oldPrice: 22.1,
      rating: 5.0,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg",
    },
    {
      id: 5,
      name: "Sweet crunchy nut mix 250gm pack",
      category: "snacks",
      price: 120.25,
      oldPrice: 123.25,
      rating: 5.0,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/11.jpg",
    },
    {
      id: 6,
      name: "Organic fresh venila farm watermelon 5kg",
      category: "fruits",
      price: 50.3,
      oldPrice: 72.6,
      rating: 3.2,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/3.jpg",
    },
    {
      id: 7,
      name: "Sweet crunchy nut mix 250gm pack",
      category: "snacks",
      price: 120.25,
      oldPrice: 123.25,
      rating: 5.0,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/10.jpg",
    },
    {
      id: 8,
      name: "Delicious white baked fresh bread and toast",
      category: "bakery",
      price: 20,
      oldPrice: 22.1,
      rating: 5.0,
      image:
        "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/17.jpg",
    },
  ];

  const categories = [
    { id: 0, name: "all" },
    { id: 1, name: "snacks" },
    { id: 2, name: "vegetables" },
    { id: 3, name: "fruits" },
    { id: 4, name: "bakery" },
  ];

  const [data, setData] = useState(Product);

  const filterData = (categoryName) => {
    if (categoryName === "all") {
      setData(Product);
    } else {
      const filtered = Product.filter((val) => val.category === categoryName);
      setData(filtered);
    }
  };

  return (
    <div style={{ padding: "40px"  }}>
      <h1 style={{ textAlign: "center", fontSize: "35px", fontWeight: "600" }}>
        Popular Products
      </h1>
      <p style={{ textAlign: "center", marginBottom: "40px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor
        <br />
        incididunt ut labore lacus vel facilisis.
      </p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          justifyContent: "center",
        }}
      >
        {/* Sidebar */}
        <div style={{ flex: "1 1 250px", maxWidth: "250px", position: "relative" }}>
          {categories.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => filterData(name)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                padding: "12px 18px",
                marginBottom: "12px",
                background: "#f2f2f2",
                border: "none",
                fontWeight: "bold",
                cursor: "pointer",
                textTransform: "capitalize",
                borderRadius: "6px",
                color: name === "all" ? "green" : "#333",
                boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              {name}
              <span>➜</span>
            </button>
          ))}

          {/* Promo Banner */}
          <div
            style={{
              height: "292px",
              borderRadius: "8px",
              padding: "20px",
              color: "#fff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              position: "absolute",
              overflow: "hidden",
              zIndex: 1,
              top: "40%",
              width: "100%",
            }}
          >
            <h3 style={{ fontSize: "40px", marginBottom: "10px" }}>Juicy</h3>
            <h2
              style={{
                fontSize: "40px",
                fontWeight: "700",
                marginBottom: "10px",
                color: "#fff89a",
              }}
            >
              FRUITS
            </h2>
            <p style={{ fontSize: "18px", marginBottom: "20px" }}>
              100% Natural
            </p>
            <button
              style={{
                background: "#64b496",
                color: "white",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Shop Now
            </button>
          </div>
          <img
            src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/product-banner.jpg"
            alt="promo"
            style={{
              width: "100%",
              height: "430px",
              objectFit: "cover",
              opacity: 0.9,
              borderRadius: "8px",
            }}
          />
        </div>

        {/* Product Grid */}
        <div
          style={{
            flex: "3",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 1fr))",
            gap: "20px",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              style={{
                border: "1px solid #eee",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center",
                boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
                minHeight: "350px",
                maxHeight: "350px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: "100%",
                  height: "150px",
                  objectFit: "contain",
                }}
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
              >
                ${item.price}
                <del
                  style={{
                    color: "#999",
                    marginLeft: "15px",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  ${item.oldPrice}
                </del>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Popular;
