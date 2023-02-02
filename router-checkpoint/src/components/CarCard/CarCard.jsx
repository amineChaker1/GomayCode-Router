import React from "react";
import { useNavigate } from "react-router-dom";
import classe from "./CarCard.module.css";

const CarCard = ({ carsList }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={classe.CarCard}>
        {carsList.map((car) => (
          <div className={classe.container}>
            <p> {car.name} </p>
            <img
              onClick={() => navigate("/description")}
              src={car.url}
              style={{ width: "80%", cursor: "pointer" }}
              alt=""
            />
            <p>Type : {car.category} </p>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CarCard;
