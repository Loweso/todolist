import React from "react";

const TaskList = (props) => {
  const { tasks } = props;
  const { handleTaskClick } = props;

  return (
    <div className="grid justify-items-center text-xl w-1/4">
      <p className="mb-7">Task List:</p>
      {tasks.map((task) => (
        <button
          key={task.name}
          className=" text-xl h-20 w-full mb-10 bg-[#D9D9D9] hover:bg-zinc-400"
          onClick={() => handleTaskClick(task)}
        >
          {task.name}
        </button>
      ))}
    </div>
  );
};

export default TaskList;
