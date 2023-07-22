import React, { useEffect, useState } from "react"
import "./App.css";
import Home from "./Home"
import Converter from "./Converter";

const App = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`app ${show ? "show" : ""}`}>
      <section id="Home">
        <Home />
      </section>

      <section id="Converter">
        <Converter />
      </section>
    </div>
  );

}

export default App