import React from 'react';

const Button = ({ text, icon, onClick, disabled }) => {

    return (
        <button className={`btn btn--${text ? 'text' : 'icon'} ${disabled ? "btn--disabled" : ""}`}>
            {text || icon}
        </button>
    )
};

export default Button;
