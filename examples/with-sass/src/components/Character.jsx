import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";

import AshFront from "../assets/images/ashFront.png";
import SearchTooltip from "../assets/images/searchTooltip.png";
import SearchingTooltip from "../assets/images/searchingTooltip.png";
import LeftLeg from "../assets/images/ashLeftLeg.png";
import RightLeg from "../assets/images/ashRightLeg.png";
import TooltipError from "../assets/images/tooltipError.png";

const Character = (props) => {

    const dispatch = useDispatch();

    const [searchTooltip, setSearchTooltip] = useState(false);
    const isLoading = useSelector(state => state.map.isLoading);

    // false = right, true: left
    const [side, setSide] = useState(false);

    useEffect(() => {
        if (isLoading) {
            setTimeout(() => { setSide(!side) }, 500);
        }
    })

    const getImage = () => {
        if (!isLoading) {
            return AshFront;
        } else {
            return side ? LeftLeg : RightLeg;
        }
    }

    return (
        <div className="character" onMouseLeave={() => setSearchTooltip(false)} onClick={props.isPokedexFull ? () => { } : () => dispatch(props.characterClick())}>
            {!isLoading &&
                <img className={`character__search ${searchTooltip ? "character__search--active" : ""}`} alt="Search" src={props.isPokedexFull ? TooltipError : SearchTooltip} />
            }
            <img className={`character__searching ${isLoading ? "character__searching--active" : ""}`} alt="Searching" src={SearchingTooltip} />
            <img className="character__ash" alt="Ash Ketchum" src={getImage()} onMouseOver={() => setSearchTooltip(true)} />
            {/* <img className="character__walking" alt="Walking" src={side ? LeftLeg : RightLeg} /> */}

        </div>
    );
};

export default Character;
