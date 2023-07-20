import React, { useState } from "react";

const Body = () => {

    const [inputValue, setInputValue] = useState("");

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    return (
        <div className="body">
            <input 
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Enter your name"
            />

            <p id="output">You entered {inputValue}</p>
        </div>
    );
}

export default Body