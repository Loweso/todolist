import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import "../styles/Body.css";

const defaultTasks = [
  {
    name: "Wash Laundry",
    detail: "Wash the shirts like you wash away your tears.",
  },
  {
    name: "Finish Problem Set",
    detail: "Finish problem set like you finish your life.",
  },
];

function Body() {
  const [isAddModalOpen, setAddModalOpen] = useState(false);
  const [isTaskModalOpen, setTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);
  const [currentTask, setCurrentTask] = useState({ name: "", detail: "" });

  const addModalToggle = () => {
    setAddModalOpen(!isAddModalOpen);
  };
  const taskModalToggle = () => {
    setTaskModalOpen(!isTaskModalOpen);
  };
  const taskAdded = (task) => {
    setTasks([...tasks, task]);
    console.log(task);
  };
  const handleTaskClick = (task) => {
    setCurrentTask(task);
    taskModalToggle();
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
            key={task.name}
            className="task-button bg-[#D9D9D9]"
            onClick={() => handleTaskClick(task)}
          >
            {task.name}
          </button>
        ))}
      </div>
      {isAddModalOpen && (
        <AddTaskModal
          isAddModalOpen={isAddModalOpen}
          setAddModalOpen={setAddModalOpen}
          onTaskAdd={taskAdded}
        />
      )}
      {isTaskModalOpen && (
        <TaskModal
          isTaskModalOpen={isTaskModalOpen}
          setTaskModalOpen={setTaskModalOpen}
          currentTask={currentTask}
        />
      )}
    </div>
  );
}

export default Body;

/*

{isTaskModalOpen &&
        tasks.map((task, detail, index) => (
          <TaskModal
            key={index}
            isTaskModalOpen={isTaskModalOpen}
            setTaskModalOpen={setTaskModalOpen}
            index={tasks.findIndex((item) => item.indexOf(task) > -1)}
            detail={taskDetails[index]}
          />
        ))}

*/
