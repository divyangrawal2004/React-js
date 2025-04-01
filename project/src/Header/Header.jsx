import { Link } from "react-router-dom"

const Header = () => {
    return (
      <div>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid  ">
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-lg-0 d-flex justify-content-between">
          <li className="nav-item me-2">
          <Link to='/Home'> Home</Link>
          </li>
          <li className="nav-item ms-4">
            <Link to='/about'>About</Link>
          </li>
          <li className="nav-item ms-4">
           <Link to='/blog'>Blog</Link>
          </li>
          <li className="nav-item ms-4">
          <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      
      </div>
    </div>
          </nav>
      </div>

    )
}

export default Header