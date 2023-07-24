import React, { useState, useEffect } from "react";
import logo from "./Assets/logo2.png"
import { useNavigate } from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const [isClicked, setIsClicked] = useState(false);

    const handleClick = () => {
        setIsClicked(true);

        // Reset the isClicked to trigger animation
        setTimeout(() => {
            setIsClicked(false);
        }, 300);

        navigate("/converter");
    }

    return (
        <div className={`home ${show ? "show" : ""}`}>
            <h1>Currency Exchange Rate</h1>
        
            <form>
                <label id="output">Name:</label>

                <input 
                    id="name"
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />

                <p className={`error-msg ${inputValue === "" ? `show` : ``}`}>Enter your name!</p>

                <img src={logo} id="main-logo" alt="logo"/>

                <button className={`start-button ${isClicked ? `clicked` : ``}`} id="start-btn" onClick={handleClick}><a href="#Converter">: ̗̀➛</a></button>
            </form>
        </div>
    );
}

export default Home