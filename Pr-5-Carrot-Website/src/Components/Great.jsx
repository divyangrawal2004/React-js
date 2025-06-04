import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Greate.css"; // Custom CSS for overlap and styling

const testimonials = [
  {
    image: "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/1.jpg",
    name: "Stephen Smith",
    role: "Co Founder",
    quote:
      "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",
    stars: 5,
  },
  {
    image: "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/2.jpg",
    name: "Lorem Robinson",
    role: "Manager",
    quote:
      "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",
    stars: 4,
  },
  {
    image: "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/testimonial/3.jpg",
    name: "Saddika Alard",
    role: "Team Leader",
    quote:
      "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”",
    stars: 5,
  },
];

const Great = () => {
  return (
    <div className="container my-5 text-center">
      <h2 className="fw-bold mb-2">Great Words From People</h2>
      <p className="text-muted mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore lacus vel facilisis.
      </p>
      <div className="row">
        {testimonials.map((item, index) => (
          <div className="col-md-4 mb-5" key={index}>
            <div className="testimonial-card position-relative pt-5 pb-4 px-3">
              <div className="testimonial-img-wrapper">
                <img
                  src={item.image}
                  alt={item.name}
                  className="rounded-circle testimonial-img"
                />
              </div>
              <p className="text-muted mb-1 mt-4">{item.role}</p>
              <h5 className="fw-bold">{item.name}</h5>
              <p className="mt-3">{item.quote}</p>
              <div className="text-warning">
                {"★".repeat(item.stars)}
                {"☆".repeat(5 - item.stars)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Great;
