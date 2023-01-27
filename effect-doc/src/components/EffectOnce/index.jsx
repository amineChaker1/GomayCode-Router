// you can run the effect once when the component firstly renders using the empty []
// equivalent to componentDidMount
import React, { useEffect, useState } from "react";

const EffectOnce = () => {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMouse = (e) => {
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(() => {
    console.log("the coordinator rendered");
    window.addEventListener("mousemove", logMouse);
    return () => {
      console.log("component unmounted");
      window.removeEventListener("mousemove", logMouse);
    };
  }, []);
  return (
    <div>
      Mouse Coordinates X - {x} Y - {y}
    </div>
  );
};

export default EffectOnce;
