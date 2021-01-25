import React, { useState } from 'react';
import chevron from '../assets/images/chevronDownBlack.png';

const NumberInput = ({ className, label, icon, placeholder, name, suffix, register }) => {

    const [value, setValue] = useState(0);

    return (
        <div className={`${className} input__container`}>
            {label && (
                <div className="input__container--row">
                    {icon && <img className="modal__statistics--row--icon" alt="Stat icon" src={icon} />}
                    <label className="input__label">
                        {label}
                    </label>
                </div>
            )}
            <div className="input__number">
                <input className="input" type="number" placeholder={placeholder} name={name} value={value} onChange={(e) => setValue(e.target.value)} ref={register}/>
                {suffix && (
                    <p className="input__suffix">
                        {suffix}
                    </p>
                )}
                <div className="input__btns">
                    <img src={chevron} className="input__increase" alt="Mais" onClick={() => value >= 0 && setValue(value + 1)} />
                    <img src={chevron} className="input__decrease" alt="Menos" onClick={() => value >= 1 && setValue(value - 1)} />
                </div>
            </div>
        </div>
    )
};

export default NumberInput;
