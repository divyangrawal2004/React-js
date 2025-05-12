import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
  return (
    <>
      {/* Header Navbar */}
      <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
      <img
        src="https://www.meesho.com/assets/svgicons/meeshoLogo.svg"
        alt="Meesho"
        style={{ height: 30 }}
      />
    </a>

    <form className="d-flex mx-auto" style={{ width: "50%" }}>
      <input
        className="form-control me-2"
        type="search"
        placeholder="Try Saree, Kurti or Search by Product Code"
        aria-label="Search"
      />
    </form>

    <div className="contant d-flex align-items-center">
      <a className="nav-link border-start" href="#">
        Become a Supplier
      </a>
      <a className="nav-link border-start" href="#">
        Investor Relations
      </a>
      <a className="nav-link border-start d-flex align-items-center gap-1" href="#">
        <FontAwesomeIcon icon={faUser} />
        <span>Profile</span>
      </a>
      <a className="nav-link border-start d-flex align-items-center gap-1" href="#">
        <FontAwesomeIcon icon={faCartShopping} />
        <span>Cart</span>
      </a>
    </div>
  </div>
</nav>

    </>
  );
};

export default Header;
