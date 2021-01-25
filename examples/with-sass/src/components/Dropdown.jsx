import React from 'react';
import chevron from '../assets/images/chevronDownBlack.png';

const Dropdown = ({ options, types, setTypes, removeType }) => {

    return (
        <>
            <div className="dropdown__container">
                <img src={chevron} className="dropdown__icon" alt="Chevron" />
                <select disabled={types.length >= 2} className="dropdown" onChange={(e) => types.length < 2 && setTypes([...types, e.target.value])} style={{cursor: types.length >=2 ? "not-allowed" : "pointer"}}>
                    {types.length === 0 &&
                        <option className="dropdown__option" value="">
                            Selecione o(s) tipo(s)
                        </option>
                    }
                    {options && Object.keys(options).map((e, i) => (
                        <option className="dropdown__option" value={e} key={i}>
                            {options[e].text}
                        </option>
                    ))}
                </select>
            </div>
            <div className="dropdown__container--types">
                {types.map((e, i) => {
                    return (
                        <div className="dropdown__container--row" key={i}>
                            <label className="dropdown__container--row--text">{options[e].text}</label>
                            <label className="dropdown__container--row--close" onClick={() => removeType(i)}>X</label>
                        </div>
                    )
                })}
            </div>
        </>
    )
};

export default Dropdown;
