import React from "react";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-logo">{/* Company logo */}</div>
      <ul className="navbar-links">
        <li>
          <a href="#">Study Abroad</a>
        </li>
        <li>
          <a href="#">Accommodation</a>
        </li>
        <li>
          <a href="#">Test Prep</a>
        </li>
        <li>
          <a href="#">Finance</a>
        </li>
        <li>
          <a href="#">Community</a>
        </li>
        <li>
          <a href="#">Products</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
      <div className="navbar-icons">{/* SVG icons */}</div>
    </div>
  );
};

export default Navbar;
