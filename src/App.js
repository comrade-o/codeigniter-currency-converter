import React, { useEffect, useState } from "react"
import "./App.css";
import Body from "./Body";

const App = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className={`app ${show ? "show" : ""}`}>
      <h1>Currency Exchange Rate</h1>

      <section id="Body">
        <Body />
      </section>
    </div>
  );

}

export default App