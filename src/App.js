import React, { useEffect, useState } from "react"
import "./App.css";
import Home from "./Home"

const App = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`app ${show ? "show" : ""}`}>
      <h1>Currency Exchange Rate</h1>

      <section id="Home">
        <Home />
      </section>
    </div>
  );

}

export default App