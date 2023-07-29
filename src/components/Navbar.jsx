import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <nav className="navbar ">
        <div>
          <img className="logo" src="/images/brand_logo.png" alt="logo" />
        </div>
        <ul className="nav-links">
          <li href="#">menu</li>
          <li href="#">loaction</li>
          <li href="#">about</li>
          <li href="#">contact</li>
        </ul>
        <div>
          <button className='nav-btn'>Login</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
