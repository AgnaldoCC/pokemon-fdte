import React from 'react';
import { useSelector } from 'react-redux';

import InfoModal from "./InfoModal";
import RegisterModal from "./RegisterModal";

const Modal = (props) => {

    const currentPokemon = useSelector(state => state.map.currentPokemon);
    const currentPokemonPosition = useSelector(state => state.map.currentPokemonPosition);

    let isCaptured = props.pokemons.find(e => e.id === currentPokemon.id);

    const isEmpty = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object
    }

    return (
        <>
            {props.isInfoOpen && !isEmpty(currentPokemon) && 
                <InfoModal closeModal={props.closeModalInfo} currentPokemon={currentPokemon} currentPokemonPosition={currentPokemonPosition} isCaptured={isCaptured} />
            }
            {props.isRegisterOpen && 
                <RegisterModal closeModal={props.closeModalRegister} currentPokemon={currentPokemon} currentPokemonPosition={currentPokemonPosition} isCaptured={isCaptured}/>
            }
        </>
    );
}

export default Modal;
