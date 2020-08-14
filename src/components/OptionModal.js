import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal className="modal" isOpen={!!props.selectedOption} contentLabel="Selected Option" onRequestClose={props.removeModal} closeTimeoutMS={200}>
    {props.selectedOption && <h3>{props.selectedOption}</h3>}
    <button className="modal-button" onClick={props.removeModal}>Okay</button>
    </Modal>
)

export default OptionModal;