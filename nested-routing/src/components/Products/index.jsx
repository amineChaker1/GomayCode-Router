import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
const Products = () => {
  return (
    <div>
      <input type="search" placeholder="Search Products" />
      <nav>
        <Link to="featured" style={{ marginRight: "20px" }}>
          Featured
        </Link>
        <Link to="new">New Products</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Products;
