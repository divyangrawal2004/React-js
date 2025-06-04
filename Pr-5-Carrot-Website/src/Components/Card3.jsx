// src/components/ProductSlider.jsx
import React from "react";
import { Container, Row, Col, Card, Button, ListGroup } from "react-bootstrap";
import "./Card3.css";

const ProductSlider = () => {
  const categories = [
    { name: "Cake & Milk", items: 65 },
    { name: "Fresh Meat", items: 30 },
    { name: "Vegetables", items: 25 },
    { name: "Apple & Mango", items: 45 },
    { name: "Strawberry", items: 68 },
  ];

  return (
    <Container fluid className="my-4 px-3 px-md-5">
      <Row className="gy-4 justify-content-center">
        {/* Category Sidebar */}
        <Col xs={12} md={4}>
          <ListGroup>
            {categories.map((cat, idx) => (
              <ListGroup.Item
                key={idx}
                className={`text-center py-4 ${
                  idx === 0 ? "text-success fw-bold" : ""
                }`}
              >
                {cat.name}
                <div style={{ fontSize: "0.9rem", color: "#888" }}>
                  ({cat.items} items)
                </div>
              </ListGroup.Item>
            ))}
            <ListGroup.Item className="text-success text-center fw-bold py-4">
              View More
            </ListGroup.Item>
          </ListGroup>
        </Col>

        {/* Promo Cards */}
        <Col xs={12} md={8}>
          <div className="d-flex flex-wrap gap-4 justify-content-center">
            {/* Cake Card */}
            <Card
              className="text-white position-relative overflow-hidden"
              style={{
                width: "100%",
                height: "34rem",
                maxWidth: "25rem",
                backgroundColor: "#000",
                border: "none",
              }}
            >
              <Card.Img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/3.jpg"
                alt="Cake"
                style={{ height: "100%", objectFit: "cover", opacity: 0.8 }}
              />

              {/* 50% OFF Text */}
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "20px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "5px",
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                <span style={{ fontSize: "60px" }}>50</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    top: "18px",
                    position: "absolute",
                    left: "75px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>%</span>
                  <span style={{ fontSize: "18px" }}>OFF</span>
                </div>
              </div>

              <Card.ImgOverlay className="d-flex flex-column justify-content-end text-center">
                <h4>Cake</h4>
                <Button
                  variant="success"
                  className="mt-2"
                  style={{ width: "40%", margin: "0 auto" }}
                >
                  Shop Now
                </Button>
              </Card.ImgOverlay>
            </Card>

            {/* Milk Card */}
            <Card
              className="text-white position-relative overflow-hidden"
              style={{
                width: "100%",
                maxWidth: "25rem",
                backgroundColor: "#000",
                border: "none",
              }}
            >
              <Card.Img
                src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/categories/4.jpg"
                alt="Milk"
                style={{ height: "100%", objectFit: "cover", opacity: 0.8 }}
              />

              {/* 40% OFF Text */}
              <div
                style={{
                  position: "absolute",
                  top: "22px",
                  left: "20px",
                  display: "flex",
                  alignItems: "flex-end",
                  gap: "5px",
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: 1,
                }}
              >
                <span style={{ fontSize: "60px" }}>40</span>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    top: "18px",
                    position: "absolute",
                    left: "75px",
                  }}
                >
                  <span style={{ fontSize: "18px" }}>%</span>
                  <span style={{ fontSize: "18px" }}>OFF</span>
                </div>
              </div>

              <Card.ImgOverlay className="d-flex flex-column justify-content-end text-center">
                <h4>Milk</h4>
                <Button
                  variant="success"
                  className="mt-2"
                  style={{ width: "40%", margin: "0 auto" }}
                >
                  Shop Now
                </Button>
              </Card.ImgOverlay>
            </Card>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSlider;
