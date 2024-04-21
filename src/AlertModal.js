import React from 'react';
import Modal from 'react-modal';

const AlertModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <h2>Invalid Sudoku</h2>
      <p>The given Sudoku is invalid! Please check your input.</p>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
};

export default AlertModal;
