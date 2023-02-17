import React from "react";
import "../styles/TaskModal.css";

const TaskModal = (props) => {
  //get the props and destruct them inside
  const { setTaskModalOpen } = props;

  const handleModalClose = () => {
    setTaskModalOpen(false);
  };

  return (
    <div className="modal-container py-6">
      <p>Task Details:</p>
      <p className="modal-details">Wash Dishes</p>
      <button
        className="modal-button bg-[#D9D9D9] border border-black"
        onClick={handleModalClose}
      >
        Close
      </button>
    </div>
  );
};

export default TaskModal;
