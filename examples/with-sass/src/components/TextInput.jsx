import React from 'react';

const TextInput = ({ className, label, placeholder, name, value, onChange }) => {

    return (
        <div className={`${className} input__container`}>
            {label && (
                <label className="input__label">
                    {label}
                </label>
            )}
            <input className="input" type="text" placeholder={placeholder} name={name} value={value} onChange={onChange} />
        </div>
    )
};

export default TextInput;
