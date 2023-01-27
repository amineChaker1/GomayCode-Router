import React from "react";
import { useState } from "react";

const Incrementer = () => {
  const [value, setValue] = useState(0);
  const incrementValue = () => {
    setValue(value + 1);
  };
  const decrementValue = () => {
    setValue(value - 1);
  };
  const incrementFive = () => {
    for (let i = 0; i < 5; i++) {
      setValue((prevValue) => prevValue + 1);
    }
  };
  return (
    <div>
      <button onClick={incrementFive}> plus 5</button>
      <button onClick={incrementValue}>+</button>
      {value}
      <button onClick={decrementValue}>-</button>
    </div>
  );
};

export default Incrementer;
