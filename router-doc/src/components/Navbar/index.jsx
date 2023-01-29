import React from "react";

import { NavLink } from "react-router-dom";
// each link component acts like an anchor tag and insted of an href we put to
// you can use Link or Navlink component the Navlink has an active class automtically
import classe from "./navbar.module.css";
const Navbar = () => {
  return (
    <nav className={classe.nav}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};

export default Navbar;
