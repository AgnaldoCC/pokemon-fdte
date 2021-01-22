import React from 'react';
import Button from './Button';
import plusIcon from '../assets/images/plus.png';

import { setCurrentPokemon, setPokemonPosition } from "../store/actions/map";
import { useDispatch } from 'react-redux';

const Sidebar = (props) => {

    const dispatch = useDispatch();

    const pokemonClick = (pokemon, index) => {
        dispatch(setCurrentPokemon(pokemon))
        dispatch(setPokemonPosition(index))
        props.pokemonItemClick();
    }

    const renderItems = () => {
        return [...Array(6)].map((e, i) => {
            const currentPokemon = props.pokemons[i];
            if (currentPokemon) {
                return (
                    <div className={`sidebar__item sidebar__item--${i} sidebar__item--active`} key={i} onClick={() => pokemonClick(currentPokemon, i)}>
                        <img className="sidebar__pokemon" src={currentPokemon.sprites.front_default} alt="Pokemon Image" />
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
                disabled={props.pokemons.length >= 6}
                icon={<img src={plusIcon} alt="+" />}
            />
        </div>
    );
};

export default Sidebar;
