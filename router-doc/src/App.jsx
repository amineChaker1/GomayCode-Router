import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NoMatch from "./components/NoMatch";
import ProgRouting from "./components/ProgRouting";
// use the Routes to declare all the routes in your app and Route to declare only one using the props path and element
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="confirm" element={<ProgRouting />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
