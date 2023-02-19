import React, { useState } from "react";
import "../styles/AddTaskModal.css";

const AddTaskModal = (props) => {
  const { setAddModalOpen, onTaskAdd } = props;
  const [inputTaskName, setInputTaskName] = useState("");
  const [inputTaskDetails, setInputTaskDetails] = useState("");

  const handleModalClose = () => {
    setAddModalOpen(false);
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
    setAddModalOpen(false);
  };

  return (
    <div className="modal-container bg-[#D9D9D9] py-6">
      <p>Add Task:</p>
      <div className="input-container mt-3">
        <div className="w-1/3">
          <p className="text-lg">Task Name:</p>
        </div>
        <input
          className="input-textbox my-16"
          type="text"
          value={inputTaskName}
          onChange={handleInputTaskNameUpdate}
        ></input>
      </div>
      <div className="input-container mb-3">
        <div className="w-1/3">
          <p className="text-lg">Task Details:</p>
        </div>
        <input
          className="input-textbox my-16"
          type="text"
          value={inputTaskDetails}
          onChange={handleInputTaskDetailsUpdate}
        ></input>
      </div>
      <div className="flex place-content-around">
        <button
          className="bg-[#D9D9D9] border border-black px-3.5 py-1/3 w-1/3 hover:bg-[#A9A9A9]"
          onClick={handleModalClose}
        >
          Close
        </button>
        <button
          className="bg-[#D9D9D9] border border-black px-3.5 py-1/3 w-1/3 hover:bg-[#A9A9A9]"
          onClick={handleInputTaskNameAdd}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
