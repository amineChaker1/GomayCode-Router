import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Counter from "./components/Counter";
import EffectOnce from "./components/EffectOnce";
import CleanUp from "./components/Cleanup";
import Fetching from "./components/Fetching";
function App() {
  return (
    <div className="App">
      <Counter />
      <CleanUp />
      <Fetching />
    </div>
  );
}

export default App;
