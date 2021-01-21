import React from 'react';
import chevron from '../assets/images/chevronDownBlack.png';

const NumberInput = ({ className, label, placeholder, name, suffix }) => {

    return (
        <div className={`${className} input__container`}>
            {label && (
                <label className="input__label">
                    {label}
                </label>
            )}
            <div className="input__number">
                <input className="input" type="number" placeholder={placeholder} name={name} />
                {suffix && (
                    <p className="input__suffix">
                        {suffix}
                    </p>
                )}
                <div className="input__btns">
                    <img src={chevron} className="input__increase" alt="Mais" />
                    <img src={chevron} className="input__decrease" alt="Menos" />
                </div>
            </div>
        </div>
    )
};

export default NumberInput;
