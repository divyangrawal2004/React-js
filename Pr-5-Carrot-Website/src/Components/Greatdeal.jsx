import React from "react";
import "./Greatdeal.css"; // Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const Greatdeal = () => {
  return (
    <div className="greatdeal-section position-relative text-white">
      <img
        src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/deal/bg-deal.jpg"
        alt="Organic Food"
        className="w-100 greatdeal-image"
      />

      <div className="content-overlay position-absolute top-50 start-0 translate-middle-y ps-5">
        <div className="promo-box  text-dark p-4 rounded shadow-sm" style={{backgroundColor: 'rgba(255, 255, 255, 0.22)', boxShadow:'3px 3px 8px 5px rgba(0, 0, 0, 0.05);'}}>
          <p className="text-success fw-semibold mb-1">35% OFF</p>
          <h2 className="fw-bold mb-3">Great deal on organic food.</h2>
          <p className="text-muted mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            maecenas accumsan lacus vel facilisis.
          </p>

          {/* Countdown */}
          <div className="d-flex justify-content-between border rounded p-3 text-center">
            <div>
              <h5 className="fw-bold mb-1">1306</h5>
              <small className="text-muted">Days</small>
            </div>
            <div>
              <h5 className="fw-bold mb-1">02</h5>
              <small className="text-muted">Hrs</small>
            </div>
            <div>
              <h5 className="fw-bold mb-1">18</h5>
              <small className="text-muted">Min</small>
            </div>
            <div>
              <h5 className="fw-bold mb-1">17</h5>
              <small className="text-muted">Sec</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Greatdeal;
