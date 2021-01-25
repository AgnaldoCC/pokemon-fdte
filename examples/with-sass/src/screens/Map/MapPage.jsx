import React from 'react';

import { searchPokemon, toggleModalInfo as toggleModalInfoAction, toggleModalRegister as toggleModalRegisterAction } from "../../store/actions/map";

import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import Character from '../../components/Character';
import { useDispatch, useSelector } from 'react-redux';

const MapPage = () => {

    const dispatch = useDispatch();

    const modalInfoOpen = useSelector(state => state.map.modalInfoOpen);
    const modalRegisterOpen = useSelector(state => state.map.modalRegisterOpen);
    const pokemons = useSelector(state => state.map.pokemons);

    const toggleModalInfo = () => {
        dispatch(toggleModalInfoAction(!modalInfoOpen))
    }

    const toggleModalRegister = () => {
        dispatch(toggleModalRegisterAction(!modalRegisterOpen))
    }

    return (
        <>
            <div className="map">
                <Sidebar pokemons={pokemons} pokemonItemClick={toggleModalInfo} />
                <Character characterClick={searchPokemon} toggleModal={toggleModalInfo} isPokedexFull={pokemons.length >= 6}/>
                <Modal isInfoOpen={modalInfoOpen} isRegisterOpen={modalRegisterOpen} closeModalInfo={toggleModalInfo} closeModalRegister={toggleModalRegister} pokemons={pokemons} />
            </div>
        </>
    );
};

export default MapPage;
