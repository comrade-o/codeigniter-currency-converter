import React, { useState } from "react";
import logo from "./Assets/logo2.png"

const Home = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="home">
            

            <input 
                id="name"
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <p id="output">Name:</p>

            <img src={logo} id="main-logo" alt="logo"/>

            <button id="start-btn" onClick={(() => {})} />
        </div>
    );
}

export default Home