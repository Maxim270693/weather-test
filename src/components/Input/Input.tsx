import React from 'react';
import './input.scss';

const Input = () => {
    return (
        <div className="inputWrap">
            <input type="text"
                   placeholder="Введите город..."
                   className="input"
            />
            <button className="button"
            >+</button>
        </div>
    );
};

export default Input;