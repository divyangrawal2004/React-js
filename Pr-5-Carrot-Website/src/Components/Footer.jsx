import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-light " style={{background:"#f7f7f8;" , marginTop:"100px"}}>
      <div className="container">
        <div className="row gy-4">
          {/* Logo & Contact */}
          <div className="col-md-4 ">
            <div className="my-3 d-flex align-items-center">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="logo" width="120px" />
            
            </div>
            <p>Carrot is the biggest market of grocery products. Get your daily needs from our store.</p>
            <ul className="list-unstyled small my-3">
              <li className="my-3"><i className="bi bi-envelope text-success me-2"></i>example@email.com</li>
              <li className="my-3"><i className="bi bi-geo-alt text-success me-2"></i>51 Green St.Huntington ohaio beach ontario, NY 11746 KY 4783, USA.</li>
              <li><i className="bi bi-telephone text-success me-2"></i>+91 123 4567890</li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="col-md-2 my-5">
            <h6 className="fw-bold">Company</h6>
            <ul className="list-unstyled my-3">
              <li style={{lineHeight:"32px"}}><a href="#">About Us</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Delivery Information</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Privacy Policy</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Terms & Conditions</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Contact Us</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Support Center</a></li>
            </ul>
          </div>

          {/* Category Links */}
          <div className="col-md-2 my-5">
            <h6 className="fw-bold">Category</h6>
            <ul className="list-unstyled my-3">
              <li style={{lineHeight:"32px"}}><a href="#">Dairy & Bakery</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Fruits & Vegetable</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Snack & Spice</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Juice & Drinks</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Chicken & Meat</a></li>
              <li style={{lineHeight:"32px"}}><a href="#">Fast Food</a></li>
            </ul>
          </div>

          {/* Newsletter & Icons */}
          <div className="col-md-4 my-5">
            <h6 className="fw-bold mb-3">Subscribe Our Newsletter</h6>
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search here..." />
              <span className="input-group-text bg-dark text-white">
                <i className="bi bi-send"></i>
              </span>
            </div>
            <div className="mb-3 d-flex gap-2 mt-4">
              <button className="btn btn-outline-dark btn-sm rounded"><i className="bi bi-facebook"></i></button>
              <button className="btn btn-outline-dark btn-sm rounded"><i className="bi bi-x"></i></button>
              <button className="btn btn-outline-dark btn-sm rounded"><i className="bi bi-dribbble"></i></button>
              <button className="btn btn-outline-dark btn-sm rounded"><i className="bi bi-instagram"></i></button>
            </div>
            <div className="d-flex gap-2 mt-4">
              <img src="	https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/1.jpg" className="footer-img" alt="1"  style={{width:"65px", height:"65px", cursor:"pointer"}}/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/product/products-rightview.jpg" className="footer-img" alt="2" style={{width:"65px", height:"65px", cursor:"pointer"}} />
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/3.jpg" className="footer-img" alt="3"  style={{width:"65px", height:"65px", cursor:"pointer"}}/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/4.jpg" className="footer-img" alt="4"  style={{width:"65px", height:"65px", cursor:"pointer"}}/>
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/insta/5.jpg" className="footer-img" alt="5"  style={{width:"65px", height:"65px", cursor:"pointer"}}/>
            </div>
          </div>
        </div>

        <hr className="my-4" />
        <p className="text-center small text-muted mb-0">
          © 2025 <span className="text-success">Carrot</span>, All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
