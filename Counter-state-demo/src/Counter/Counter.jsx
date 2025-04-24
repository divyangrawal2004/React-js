import React from 'react';
import './Counter.css'; 
const Counter = ({ add, Add, minus, reset }) => {
    return (
        <div className="counter-container">
            <h1 className="counter-title">Counter</h1>
            <h2 className="counter-value">Counter: {add}</h2>
            <div className="button-container">
                <button className="counter-button add-button" onClick={Add}>Add</button>
                <button className="counter-button minus-button" disabled={add === 0} onClick={minus}>Minus</button>
                <button className="counter-button reset-button" onClick={reset}>Reset</button>
            </div>
        </div>
    );
}

export default Counter;