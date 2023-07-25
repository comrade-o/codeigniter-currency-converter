import React, { useState, useEffect } from "react";

const Converter = () => {

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true);
    }, []);

    return (
        <div className={`converter ${show ? "show" : ""}`}>
            <h1 id="heading">Currency Exchange Rate</h1>

            <form>
                <label for="currency-menu" id="currency-label">Currency</label>
                <select id="currency-menu">
                    <option value="1">USD</option>
                    <option value="2">INR</option>
                    <option value="3">LKR</option>
                </select>
            </form>
        </div>
    );
}

export default Converter