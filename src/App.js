import React, { useEffect, useState } from "react"
import "./App.css";
import Home from "./Home"
import Converter from "./Converter";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
const API_URL = "https://api.exchangeratesapi.io/latest"

const App = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`app ${show ? "show" : ""}`}>
      <Router>
        <Routes>

        <Route id="Home" path="/" element={<Home />} />
        <Route id="Converter" path="/converter" element={<Converter />} />
        </Routes>
      </Router>
    </div>
  );

}

export default App