import React from "react";

const TaskModal = (props) => {
  const { setIsTaskModalOpen, currentTask } = props;

  const handleModalClose = () => {
    setIsTaskModalOpen(false);
  };

  return (
    <div className="h-auto w-auto">
      <div className="fixed inset-0 z-[1000] bg-transparent"></div>
      <div className="bg-tasklistgrey text-lg grid items-center top-1/4 w-1/3 h-[300px] text-center absolute ml-[-250px] px-20 py-6 z-[1001]">
        <p>Task Details:</p>
        <p className="text-lg">{currentTask.detail}</p>
        <button
          className="bg-tasklistgrey border border-black w-[300px] h-20 hover:bg-tlhovergrey m-auto"
          onClick={handleModalClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default TaskModal;
