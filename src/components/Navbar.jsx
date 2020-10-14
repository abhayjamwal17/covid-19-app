import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand " href="localhost:3000">
        Covid-19 Monitor
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <div className="text-center navbar-nav">
          <NavLink className="nav-item nav-link" exact to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" exact to="/essentials">
            Essentials
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
