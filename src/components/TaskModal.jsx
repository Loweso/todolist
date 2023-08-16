import React from "react";

const TaskModal = (props) => {
  const { setIsTaskModalOpen, currentTask } = props;

  const handleModalClose = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <div className="bg-tasklistgrey text-lg grid justify-center top-1/4 w-1/3 h-1/2 text-center absolute py-6">
      <p>Task Details:</p>
      <p className="text-lg">{currentTask.detail}</p>
      <button
        className="bg-[#D9D9D9] border border-black"
        onClick={handleModalClose}
      >
        Close
      </button>
    </div>
  );
};

export default TaskModal;
