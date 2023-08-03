import React, { useState, useEffect } from "react";
import CurrencyRow from "./CurrencyRow";
const API_URL = "http://data.fixer.io/api/latest"

const Converter = (props) => {

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
    }


    const [currencyOptions, setCurrencyOptions] = useState([]);
    const [fromCurrency, setFromCurrency] = useState();
    const [toCurrency, setToCurrency] = useState();
    const [exchangeRate, setExchangeRate] = useState();
    const [amount, setAmount] = useState(1);
    const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

    let toAmount, fromAmount

    if(amountInFromCurrency) {
        fromAmount = amount;
        toAmount = amount * exchangeRate;
    }
    else {
        toAmount = amount;
        fromAmount = amount / exchangeRate;
    }

    useEffect(() => {
        fetch(API_URL)
            .then(response => response.json())
            .then(data => {
                const firstCurrecy = Object.keys(data.rates)[0]
                setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
                setFromCurrency(data.base);
                setToCurrency(firstCurrecy);
                setExchangeRate(data.rates[firstCurrecy]);
            })
    }, []);

    useEffect(() => {
        if(fromCurrency != null && toCurrency != null) {
            fetch(`${API_URL}latest&base${fromCurrency}&symbols=${toCurrency}`)
                .then(response => response.json())
                .then(data => setExchangeRate(data.rates[toCurrency]))
        }
    }, [fromCurrency, toCurrency]);

    const handleFromAmountChange = (event) => {
        setAmount(event.target.value);
        setAmountInFromCurrency(true);
    }

    const handleToAmountChange = (event) => {
        setAmount(event.target.value);
        setAmountInFromCurrency(false);
    }

    return (
        <div className={`converter ${show ? "show" : ""}`}>
            <h1 id="heading">Currency Converter</h1>

            <h2>Convert:</h2>
            <CurrencyRow
                currencyOptions={currencyOptions}
                selectedCurrency={fromCurrency}
                onChangeCurrency={event => setFromCurrency(event.target.value)}
                onChangeAmount={handleFromAmountChange}
                amount={fromAmount}
             />

             <h2>To:</h2>
             <CurrencyRow 
                currencyOptions={currencyOptions}
                selectedCurrency={toCurrency}
                onChangeCurrency={event => setToCurrency(event.target.value)}
                onChangeAmount={handleToAmountChange}
                amount={toAmount}
             />
        </div>
    );
}

export default Converter