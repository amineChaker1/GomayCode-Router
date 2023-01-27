import React, { useEffect } from "react";
import { useState } from "react";

const Count = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const handleClick = () => {
    setCount(count + 1);
  };
  // use effect runs everytime the component reneders (the first time and efter every update)
  // but you can conditionally run the effect using the []
  useEffect(() => {
    document.title = `Count is ${count} `;
    console.log(`updating the document title`);
  }, [count]);
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleClick}>Count {count} </button>
      {name}
    </div>
  );
};

export default Count;
