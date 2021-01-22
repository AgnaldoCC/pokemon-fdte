import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';

const Sidebar = () => {

    const renderItems = () => {
        return [...Array(6)].map((e, i) => (
            <div className={`sidebar__item sidebar__item--${i}`} key={i} >
                ?
            </div>
        ))
    }

    return (
        <div className="sidebar">
            {renderItems()}
            <Button
                icon={<img src={plusIcon} alt="+" />}
            />
        </div>
    );
};

export default Sidebar;
