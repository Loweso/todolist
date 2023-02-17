import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import "../styles/Body.css";

function Body() {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [tasks, addTasks] = useState(["Wash Laundry", "Finish Problem Set"]);

  /*
  const [taskDetails, addTaskDetails] = useState([
    "Wash the shirts like you wash away your tears",
    "Finish problem set like you finish your life",
  ]);
*/

  const addModalToggle = () => {
    setAddModalOpen(!isAddModalOpen);
  };
  const taskModalToggle = () => {
    setTaskModalOpen(!isTaskModalOpen);
  };
  const taskAdded = (task, detail) => {
    addTasks([...tasks, task]);
  };

  return (
    <div className="body-container">
      <button className="add-task-button bg-[#D9D9D9]" onClick={addModalToggle}>
        Add Task
      </button>
      <div className="tasklist-container">
        <p className="mb-7">Task List:</p>
        {tasks.map((task) => (
          <button
            key={task}
            className="task-button bg-[#D9D9D9]"
            onClick={taskModalToggle}
          >
            {task}
          </button>
        ))}
      </div>
      {isAddModalOpen && (
        <AddTaskModal
          isAddModalOpen={isAddModalOpen}
          setAddModalOpen={setAddModalOpen}
          onClick={taskAdded}
        />
      )}
      {isTaskModalOpen && (
        <TaskModal
          isTaskModalOpen={isTaskModalOpen}
          setTaskModalOpen={setTaskModalOpen}
        />
      )}
    </div>
  );
}

export default Body;
