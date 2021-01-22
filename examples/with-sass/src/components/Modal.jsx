import React from 'react';
import { useSelector } from 'react-redux';

import InfoModal from "./InfoModal";

const Modal = (props) => {

    const currentPokemon = useSelector(state => state.map.currentPokemon);
    const currentPokemonPosition = useSelector(state => state.map.currentPokemonPosition);

    const isCaptured = props.pokemons.find(e => e.id === currentPokemon.id)

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    return (
        <InfoModal isOpen={props.isOpen && !isEmpty(currentPokemon)} closeModal={props.closeModal} currentPokemon={currentPokemon} currentPokemonPosition = {currentPokemonPosition}  isCaptured={isCaptured}/>
    );
}

export default Modal;
