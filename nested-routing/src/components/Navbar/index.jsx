import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav>
        <NavLink to="/about" style={{ marginRight: "20px" }}>
          About
        </NavLink>
        <NavLink to="/products" style={{ marginRight: "20px" }}>
          Products
        </NavLink>
        <NavLink to="/users">Users</NavLink>
      </nav>
    </>
  );
};

export default Navbar;
