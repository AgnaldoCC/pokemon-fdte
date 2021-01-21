import React from 'react';
import chevron from '../assets/images/chevronDownBlack.png';

const Dropdown = ({ options, multiple }) => {

    return (
        <div className="dropdown__container">
            <img src={chevron} className="dropdown__icon" alt="Chevron" />
            <select className="dropdown">
                <option className="dropdown__option" value="">
                    Selecione o(s) tipo(s)
                </option>
                {options && options.map((option, index) => (
                    <option className="dropdown__option" value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </div>
    )
};

export default Dropdown;
