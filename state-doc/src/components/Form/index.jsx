import React from "react";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <div>
      <input
        type="text"
        value={name.firstName}
        onChange={(e) => setName({ ...name, firstName: e.target.value })}
      />
      <input
        type="text"
        value={name.lastName}
        onChange={(e) => setName({ ...name, lastName: e.target.value })}
      />{" "}
      <br />
      <h1>
        your full name is {name.firstName} {name.lastName}{" "}
      </h1>
      {JSON.stringify(name)}
    </div>
  );
};

export default Form;
