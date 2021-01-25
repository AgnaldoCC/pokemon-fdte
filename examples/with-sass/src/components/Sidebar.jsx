import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';
import NoImage from "../assets/images/noImage.jpg";

import { setCurrentPokemon, setPokemonPosition, toggleModalRegister } from "../store/actions/map";
import { useDispatch } from 'react-redux';

const Sidebar = (props) => {

    const dispatch = useDispatch();

    const pokemonClick = (pokemon, index) => {
        dispatch(setCurrentPokemon(pokemon))
        dispatch(setPokemonPosition(index))
        props.pokemonItemClick();
    }

    const openModalRegister = () => {
        dispatch(toggleModalRegister(true))
    }

    const renderItems = () => {
        return [...Array(6)].map((e, i) => {
            const currentPokemon = props.pokemons[i];
            const hasImage = currentPokemon && currentPokemon.sprites.front_default;
            if (currentPokemon) {
                return (
                    <div className={`sidebar__item sidebar__item--${i} sidebar__item--active ${!hasImage ? "sidebar__item--active--noImage" : ""}`} key={i} onClick={() => pokemonClick(currentPokemon, i)}>
                        <img className="sidebar__pokemon" src={hasImage ? currentPokemon.sprites.front_default : NoImage} alt="Pokemon" />
                    </div>
                )
            } else {
                return (
                    <div className={`sidebar__item sidebar__item--${i}`} key={i} >
                        ?
                    </div>
                )
            }
        })
    }

    return (
        <div className="sidebar">
            {renderItems()}
            <Button
                onClick={() => openModalRegister()}
                disabled={props.pokemons.length >= 6}
                icon={<img src={plusIcon} alt="+" />}
            />
        </div>
    );
};

export default Sidebar;
