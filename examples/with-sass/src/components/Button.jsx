import React from 'react';

const Button = ({ text, icon, onClick, disabled, type }) => {

    return (
        <button className={`btn btn--${text ? 'text' : 'icon'} ${disabled ? "btn--disabled" : ""}`} onClick={onClick} type={type}>
            {text || icon}
        </button>
    )
};

export default Button;
