import React from "react";
import "./Header.css";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Column 1 */}
        <div className="footer-col-3">
          <h2>Shop Non-Stop on Meesho</h2>
          <p>Trusted by more than 1 Crore Indians</p>
          <p>Cash on Delivery | Free Delivery</p>
          <div className="app-buttons">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" />
          </div>
        </div>

        {/* Column 2 */}
        <div className="footer-col-2">
          <h4 style={{marginLeft : "20px"}}>Careers</h4>
          <ul>
            <li>Become a supplier</li>
            <li>Hall of Fame</li>
            <li>Sitemap</li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="footer-col-3">
          <h4>Legal & Policies</h4>
          <ul>
            <li>Meesho Tech Blog</li>
            <li>Notices & Returns</li>
          </ul>
        </div>

        {/* Column 4 - Social Media Icons */}
        <div className="footer-col-2">
          <h4>Reach out to us</h4>
          <div className="social-icons">
            <FaFacebook className="icon facebook" />
            <FaInstagram className="icon instagram" />
            <FaYoutube className="icon youtube" />
            <FaLinkedin className="icon linkedin" />
            <FaTwitter className="icon twitter" />
          </div>
        </div>

        {/* Column 5 */}
        <div className="footer-col-2">
          <h4>Contact Us</h4>
          <p>
            Fashnear Technologies Private Limited, <br />
            CIN: U74900KA2015PTC082263 <br />
            3rd Floor, Wing-E, Helios Business Park, <br />
            Kadubeesanahalli Village, Varthur Hobli, <br />
            Outer Ring Road Bellandur, Bangalore, <br />
            Bangalore South, Karnataka, India, 560103 <br />
            E-mail address: query@meesho.com
          </p>
          <p>© 2015-2025 Meesho.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
