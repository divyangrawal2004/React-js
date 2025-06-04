import React from "react";
import "./Delivery.css"; // Import external CSS

const features = [
  {
    title: "Product Packing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: "📦", // Replace with your actual icon component
  },
  {
    title: "24X7 Support",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: "🎧",
  },
  {
    title: "Delivery in 5 Days",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: "🚚",
  },
  {
    title: "Payment Secure",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
    icon: "💵",
  },
];

const Delivery = () => {
  return (
    <div className="feature-container">
      {features.map((item, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{item.icon}</div>
          <h3 className="feature-title">{item.title}</h3>
          <p className="feature-desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Delivery;
