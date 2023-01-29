import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      Home Page
      <button onClick={() => navigate("confirm")}> Place Order </button>
    </>
  );
};

export default Home;
