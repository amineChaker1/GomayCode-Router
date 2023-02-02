import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import FeaturedProducts from "./components/Featured";
import NewProducts from "./components/NewProducts";
import Users from "./components/Users";
import UserDescription from "./components/UserDescrition";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />}>
          {/*index routing is to display the child element directly without clicking on it */}
          <Route index element={<FeaturedProducts />} />
          <Route path="featured" element={<FeaturedProducts />} />
          <Route path="new" element={<NewProducts />} />
        </Route>
        <Route path="users" element={<Users />} />

        <Route path="users/:userId" element={<UserDescription />} />
      </Routes>
    </>
  );
}

export default App;
