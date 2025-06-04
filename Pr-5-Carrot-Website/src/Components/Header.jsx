import React from 'react';
import { Container, Form, Dropdown, InputGroup, Button } from 'react-bootstrap';
import { FaUser, FaHeart, FaShoppingCart, FaSearch } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  return (
    <div style={{ backgroundColor: '#fff', borderBottom: '1px solid #eaeaea' }}>
      <Container  className="py-2">
        <div className="row align-items-center g-3">
          
          {/* Logo */}
          <div className="col-6 col-md-2 text-start text-md-start">
            <img
              src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png"
              alt="Logo"
              style={{ height: '40px' }}
            />
          </div>

          {/* Search bar */}
          <div className="col-12 col-md-6">
            <InputGroup style={{ maxWidth: '100%' }}>
              <Form.Control
                placeholder="Search For items..."
                style={{ border: "1px solid #64b496", fontSize: "14px" }}
              />
              <Dropdown>
                <Dropdown.Toggle
                  style={{
                    border: "1px solid #64b496",
                    backgroundColor: "transparent",
                    color: "black",
                    fontSize: "12px"
                  }}
                  id="dropdown-basic"
                >
                  All Categories
                </Dropdown.Toggle>
                <Dropdown.Menu style={{ fontSize: "12px" }}>
                  <Dropdown.Item>All Categories</Dropdown.Item>
                  <Dropdown.Item>Mens</Dropdown.Item>
                  <Dropdown.Item>Womens</Dropdown.Item>
                  <Dropdown.Item>Electronics</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
              <Button variant="success">
                <FaSearch />
              </Button>
            </InputGroup>
          </div>

          {/* Right icons */}
          <div className="col-6 col-md-4 d-flex justify-content-end gap-3 text-end">
            <div className="d-flex align-items-center">
              <FaUser className="me-1" /> <span className="d-none d-sm-inline">Account</span>
            </div>
            <div className="d-flex align-items-center">
              <FaHeart className="me-1" /> <span className="d-none d-sm-inline">Wishlist</span>
            </div>
            <div className="d-flex align-items-center">
              <FaShoppingCart className="me-1" /> <span className="d-none d-sm-inline">Cart</span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
