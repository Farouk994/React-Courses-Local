import React from "react";
import { NavLink } from "react-router-dom"

function Header() {
  const activeStyle = {
    color : "orange"
  }
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink activeStyle={activeStyle} className="navbar-brand" exact to="/">
            Home
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" aria-current="page" to="/Courses">
                 Courses
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" to="/About">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink activeStyle={activeStyle} className="nav-link active" to="/Pricing">
                  Pricing
                </NavLink>
              </li>
            </ul>
            {/* <span className="navbar-text">Navbar text with an inline element</span> */}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
