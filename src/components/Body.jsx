import React, { useState } from "react";
import AddTaskModal from "./AddTaskModal";
import TaskModal from "./TaskModal";
import UpdatedTaskList from "./UpdatedTaskList";
//import TaskList from "./TaskList";

const defaultTasks = [
  {
    name: "Wash Laundry",
    detail: "Wash the shirts like you wash away your tears.",
    category: "To Do",
  },
  {
    name: "Finish Problem Set",
    detail: "Finish problem set like you finish your life.",
    category: "In Progress",
  },
  {
    name: "Run Away",
    detail: "Run away, Simba. Run away and never return.",
    category: "Finished",
  },
  {
    name: "Look Around",
    detail:
      "Look around, look around at how lucky we are to be alive right now.",
    category: "To Do",
  },
];

function Body() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
  const [tasks, setTasks] = useState(defaultTasks);
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
    console.log(task);
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

      {/*
      <TaskList tasks={tasks} handleTaskClick={handleTaskClick} />
      */}

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
