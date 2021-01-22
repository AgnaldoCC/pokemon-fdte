import React from 'react';

import { searchPokemon, toggleModal as toggleModalAction } from "../../store/actions/map";

import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';
import Character from '../../components/Character';
import { useDispatch, useSelector } from 'react-redux';

const MapPage = () => {

    const dispatch = useDispatch();

    const modalOpen = useSelector(state => state.map.modalOpen);


    const toggleModal = () => {
        dispatch(toggleModalAction(!modalOpen))
    }

    return (
        <>
            <div className="map">
                <Sidebar />
                <Character characterClick={searchPokemon} toggleModal={toggleModal} />
                <Modal isOpen={modalOpen} closeModal={toggleModal}>
                    <div style={{ height: '30rem', width: '30rem' }} />
                </Modal>
            </div>
        </>
    );
};

export default MapPage;
