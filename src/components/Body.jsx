import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import TaskList from "./TaskList";

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
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);
  const [currentTask, setCurrentTask] = useState({ name: "", detail: "" });

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const toggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };
  const updateTaskList = (task) => {
    setTasks([...tasks, task]);
    console.log(task);
  };
  const handleTaskClick = (task) => {
    setCurrentTask(task);
    toggleTaskModal();
  };

  return (
    <div className="grid h-full justify-items-center py-20 relative mt-20">
      <button
        className="text-xl h-20 w-1/6 mb-10 bg-tasklistgrey hover:bg-tlhovergrey"
        onClick={toggleAddModal}
      >
        Add Task
      </button>

      <TaskList tasks={tasks} handleTaskClick={handleTaskClick} />

      {isAddModalOpen && (
        <AddTaskModal
          isAddModalOpen={isAddModalOpen}
          setIsAddModalOpen={setIsAddModalOpen}
          onTaskAdd={updateTaskList}
        />
      )}
      {isTaskModalOpen && (
        <TaskModal
          isTaskModalOpen={isTaskModalOpen}
          setIsTaskModalOpen={setIsTaskModalOpen}
          currentTask={currentTask}
        />
      )}
    </div>
  );
}

export default Body;
