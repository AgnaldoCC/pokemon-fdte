import React from 'react';
import Sidebar from '../../components/Sidebar';
import Modal from '../../components/Modal';

const MapPage = () => {

    return (
        <>
            <div className="map">
                <Sidebar />
                <Modal>
                    <div style={{ height: '30rem', width: '30rem' }} />
                </Modal>
            </div>
        </>
    );
};

export default MapPage;
