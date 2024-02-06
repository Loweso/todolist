import React, { useEffect, useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import UpdatedTaskList from "./UpdatedTaskList";
import defaultTasks from "./constants.jsx";
import { useSearchParams } from "react-router-dom";

function Body() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);
  const [searchParams] = useSearchParams();
  const [currentTask, setCurrentTask] = useState({
    name: "",
    detail: "",
    category: "",
  });

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };
  const toggleTaskModal = () => {
    setIsTaskModalOpen(!isTaskModalOpen);
  };
  const updateTaskList = (task) => {
    setTasks([...tasks, task]);
  };
  const handleTaskClick = (task) => {
    setCurrentTask(task);
    toggleTaskModal();
  };

  return (
    <div className="grid h-full justify-items-center pt-20 relative mt-20">
      <button
        className="text-xl h-16 w-[200px] mb-10 rounded-full bg-tasklistgrey hover:bg-tlhovergrey"
        onClick={toggleAddModal}
      >
        Add Task
      </button>
      <UpdatedTaskList tasks={tasks} handleTaskClick={handleTaskClick} />

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
