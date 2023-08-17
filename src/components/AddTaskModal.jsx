import React, { useState } from "react";

const AddTaskModal = (props) => {
  const { setIsAddModalOpen, onTaskAdd } = props;
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputTaskDetails, setInputTaskDetails] = useState("");

  const handleModalClose = () => {
    setIsAddModalOpen(false);
  };

  const handleInputTaskNameUpdate = (event) => {
    setInputTaskName(event.target.value);
  };

  const handleInputTaskDetailsUpdate = (event) => {
    setInputTaskDetails(event.target.value);
  };

  const handleInputTaskNameAdd = (event) => {
    event.preventDefault();
    onTaskAdd({ name: inputTaskName, detail: inputTaskDetails });
    setIsAddModalOpen(false);
  };

  return (
    <div className="h-auto w-auto">
      <div className="fixed inset-0 bg-transparent"></div>
      <div className="bg-tasklistgrey text-lg grid justify-center absolute top-1/4 text-center ml-[-250px] h-100 w-1/3 py-6">
        <p>Add Task:</p>
        <div className="gap-y-[5%] flex content-evenly h-1/2 mt-3">
          <div className="w-1/3">
            <p className="text-lg">Task Name:</p>
          </div>
          <input
            className="w-full p-5 my-2 mx-0 box-border"
            type="text"
            value={inputTaskName}
            onChange={handleInputTaskNameUpdate}
          ></input>
        </div>
        <div className="gap-y-[5%] flex content-evenly h-1/2 mb-3">
          <div className="w-1/3">
            <p className="text-lg">Task Details:</p>
          </div>
          <input
            className="w-full p-5 my-2 mx-0 box-border"
            type="text"
            value={inputTaskDetails}
            onChange={handleInputTaskDetailsUpdate}
          ></input>
        </div>
        <div className="flex place-content-around">
          <button
            className="bg-tasklistgrey border border-black px-3.5 py-1/3 w-1/3 hover:bg-tlhovergrey"
            onClick={handleModalClose}
          >
            Close
          </button>
          <button
            className="bg-tasklistgrey border border-black px-3.5 py-1/3 w-1/3 hover:bg-tlhovergrey"
            onClick={handleInputTaskNameAdd}
          >
            Add Task
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTaskModal;
