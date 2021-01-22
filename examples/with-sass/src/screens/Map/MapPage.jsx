import React from 'react';

import { searchPokemon, toggleModalInfo as toggleModalAction } from "../../store/actions/map";

import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import Character from '../../components/Character';
import { useDispatch, useSelector } from 'react-redux';

const MapPage = () => {

    const dispatch = useDispatch();

    const modalInfoOpen = useSelector(state => state.map.modalInfoOpen);
    const pokemons = useSelector(state => state.map.pokemons);

    const toggleModal = () => {
        dispatch(toggleModalAction(!modalInfoOpen))
    }

    return (
        <>
            <div className="map">
                <Sidebar pokemons={pokemons} pokemonItemClick={toggleModal} />
                <Character characterClick={searchPokemon} toggleModal={toggleModal} isPokedexFull={pokemons.length >= 6}/>
                <Modal isOpen={modalInfoOpen} closeModal={toggleModal} pokemons={pokemons} />
            </div>
        </>
    );
};

export default MapPage;
