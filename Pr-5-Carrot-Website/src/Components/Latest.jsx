import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Latest.css";
import { style } from "@splidejs/splide/src/js/utils";

const newsData = [
  {
    category: "Snacks",
    title: "Urna pretium elit mauris cursus at elit Vestibulum.",
    date: "10",
    month: "oct",
    image:
      "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg",
  },
  {
    category: "Food",
    title: "Best guide to Shopping for organic ingredients.",
    date: "09",
    month: "sep",
    image:
      "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg",
  },
  {
    category: "Snacks",
    title: "Cursus at elit vestibulum urna pretium elit mauris.",
    date: "12",
    month: "oct",
    image:
      "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg",
  },
];

const Latest = () => {
  return (
    <div className="container py-3">
      <div className="text-center mb-5">
        <h2 className="fw-bold display-6">Latest News</h2>
        <p className="text-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore lacus vel facilisis.
        </p>
      </div>

      <div className="row g-4">
        {newsData.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm border-1 d-flex flex-column justify-content-between">
              <div className="card-body">
                <p className="text-muted small">By Admin | {item.category}</p>
                <h5 className="card-title">{item.title}</h5>
                <a
                  href="#"
                  className="text-success fw-semibold text-decoration-none"
                >
                  Read More <span className="ms-1">→</span>
                </a>
              </div>

              <div className="position-relative">
                <div className="image-container">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid"
                    style={{
                      width: "100%",
                      height: "250px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className="position-absolute bottom-0 end-0 bg-dark text-white rounded px-2 py-1 text-center"
                    style={{
                      margin: "10px",
                      width: "50px",
                      fontSize: "14px",
                      lineHeight: "1.2",
                    }}
                  >
                    <div className="fw-bold">{item.date}</div>
                    <div className="text-uppercase">{item.month}</div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
