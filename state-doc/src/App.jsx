import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";
import Incrementer from "./components/Incrementer";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Counter />
      <Incrementer />
      <Form />
    </div>
  );
}

export default App;
