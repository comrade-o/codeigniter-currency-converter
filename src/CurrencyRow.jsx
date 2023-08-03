import React from "react";

const CurrencyRow = (props) => {

    const {
        currencyOptions,
        selectedCurrency,
        onChangeCurrency,
        onChangeAmount,
        amount
    } = props

    return (
        <div className="currency-row">
            <input 
                type="number"
                className="currency-input"
                value={amount}
                onChange={onChangeAmount}
            />

            <select value={selectedCurrency} onChange={onChangeCurrency}>
                {currencyOptions.map(option => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        </div>
    );
}

export default CurrencyRow