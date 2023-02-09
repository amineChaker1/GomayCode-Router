import React from "react";
import cars from "../../assets/cars";
import classe from "./desc.module.css";
const Description = () => {
  return (
    <div>
      {
        <div className={classe.container}>
          <p> {cars[0].name} </p>
          <img
            src={cars[0].url}
            style={{ width: "80%", cursor: "pointer" }}
            alt=""
          />
          <p>Type : {cars[0].category} </p>
          <p>{cars[0].description}</p>
        </div>
      }
    </div>
  );
};

export default Description;
