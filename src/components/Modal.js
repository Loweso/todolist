import React from 'react';

const Modal = (props) => {
  //get the props and destruct them inside
  const { setIsOpen } = props;

  const handleModalClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="modal-container">
      <p>Simple Modal</p>
      <button onClick={handleModalClose}>Close</button>
    </div>
  );
};

export default Modal;
