import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="Header">
      <h2 className="logo">Logo</h2>
      <div className="nav_bar">
        <Link to="/">Menu</Link>
        <Link to="/map">Map</Link>
      </div>
    </div>
  );
}

export default Header;
