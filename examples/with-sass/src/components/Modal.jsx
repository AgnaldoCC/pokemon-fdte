import React from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/images/close.png';

const Modal = ({ children }) => (
    <div className="modal">
        <div className="modal__content">
            <img className="modal__close" src={closeIcon} alt="Fechar" />
            {children}
        </div>
    </div>
);

Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
