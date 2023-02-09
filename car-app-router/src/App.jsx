import { Route, Routes } from "react-router-dom";
import "./App.css";
import Description from "./components/Description";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/description" element={<Description />} />
      </Routes>
    </div>
  );
}

export default App;
