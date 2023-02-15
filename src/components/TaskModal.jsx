import React from 'react';
import '../styles/TaskModal.css'

const TaskModal = (props) => {
  //get the props and destruct them inside
  const { setModalOpen } = props;

  const handleModalClose = () => {
  setModalOpen(false);
  };

  return (
    <div className="modal-container">
      <p>Task Details:</p>
      <p className='modal-details'>Wash Dishes</p>
      <button className="modal-button" onClick={handleModalClose}>Close</button>
    </div>
  );
};

export default TaskModal;
