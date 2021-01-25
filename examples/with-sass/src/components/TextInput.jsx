import React, { useState } from 'react';

const TextInput = ({ className, label, placeholder, name, register }) => {

    const [value, setValue] = useState("");

    return (
        <div className={`${className} input__container`}>
            {label && (
                <label className="input__label--text">
                    {label}
                </label>
            )}
            <input className="input" type="text" placeholder={placeholder} name={name} value={value} ref={value !== "" ? register : undefined} onChange={(e) => setValue(e.target.value)}/>
        </div>
    )
};

export default TextInput;
