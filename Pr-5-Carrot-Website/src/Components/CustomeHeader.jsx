import React from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { FaBars, FaPhoneAlt } from "react-icons/fa";
import "./Header.css";
import { FaChevronDown } from "react-icons/fa";


function CustomHeader() {
  return (
    <Navbar expand="lg" className="bg-white border-bottom py-2">
      <Container>
        {/* Left Toggle */}
        <div className="position-relative hover-dropdown">
          <Button variant="light" className="me-3">
            <FaBars />
          </Button>

          {/* Hover Dropdown Panel */}
          <div className="dropdown-panel">
            <div className="dropdown-horizontal-grid">
              {/* Left Side Category List */}
              <div className="dropdown-left">
                <div className="dropdown-item-box2">Dairy & Bakery</div>
                <div className="dropdown-item-box">Fruits & Vegetable</div>
                <div className="dropdown-item-box">Snack & Spice</div>
                <div className="dropdown-item-box">Juice & Drinks</div>
                <div className="dropdown-item-box">View All</div>
              </div>

              {/* Dairy Section */}
              <div className="dropdown-right-column">
                <h6 className="dropdown-title">Dairy</h6>
                <span>Milk</span>
                <span>Ice Cream</span>
                <span>Cheese</span>
                <span>Frozen Custard</span>
                <span>Frozen Yogurt</span>
              </div>

              {/* Bakery Section */}
              <div className="dropdown-right-column">
                <h6 className="dropdown-title">Bakery</h6>
                <span>Cake And Pastry</span>
                <span>Rusk Toast</span>
                <span>Bread & Buns</span>
                <span>Chocolate Brownie</span>
                <span>Cream Roll</span>
              </div>
            </div>
          </div>
        </div>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{borderRadius:"10px"}}>
          <Nav className="mx-auto align-items-center " >
            {[
              { label: "Home", items: ["Home 1", "Home 2", "Home 3"] },
              { label: "Category", items: ["Electronics", "Furniture"] },
              { label: "Products", items: ["New Arrivals", "Best Sellers"] },
              { label: "Pages", items: ["About Us", "Contact"] },
              { label: "Blog", items: ["Latest Posts", "Popular"] },
              { label: "Elements", items: ["UI Kits", "Widgets"] },
            ].map((menu, index) => (
              <div className="nav-item dropdown-hover mx-2" key={index}>
                <span className="dropdown-toggle-custom">{menu.label}
                   <FaChevronDown style={{ fontSize: "0.6rem" ,marginLeft:"8px"}} />
                </span>
                <div className="dropdown-menu-custom">
                  {menu.items.map((item, idx) => (
                    <div className="dropdown-item-custom" key={idx}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Nav>

          <div className="d-flex align-items-center ms-auto">
            <FaPhoneAlt className="me-2 text-secondary" />
            <span className="fw-semibold">+123 ( 456 ) ( 7890 )</span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CustomHeader;
