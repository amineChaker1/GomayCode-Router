import React from "react";
import { useNavigate } from "react-router-dom";
// progromattic routing is when a user gets taken to another page after complting a task
// example placing an order and for that we use the useNavigate hook
const ProgRouting = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Order Confirmed !</div>
      <button onClick={() => navigate(-1)}>Go Back</button>
    </>
  );
};

export default ProgRouting;
