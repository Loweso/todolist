import React from "react";

const UpdatedTaskList = (props) => {
  const { tasks } = props;
  const { handleTaskClick } = props;

  return (
    <div className="h-96 w-1/2 bg-black flex">
      <div className="h-full w-1/3 bg-tasklistgrey grid relative">
        <div className="absolute flex h-1/6 w-full bg-todotask border-b-2 border-black text-xl justify-center items-center">
          To Do
        </div>
        <div className="absolute flex flex-col h-3/4 w-full mt-20 items-center">
          {tasks
            .filter((task) => task.category === "To Do")
            .map((task) => (
              <button
                key={task.name}
                className="text-lg h-12 w-2/3 my-2 bg-todotask hover:bg-tlhovergrey"
                onClick={() => handleTaskClick(task)}
              >
                {task.name}
              </button>
            ))}
        </div>
      </div>
      <div className="h-full w-1/3 bg-tlhovergrey grid relative">
        <div className="absolute flex h-1/6 w-full bg-inprogresstask border-b-2 border-black text-xl justify-center items-center">
          In Progress
        </div>
        <div className="absolute flex flex-col h-3/4 w-full mt-20 items-center">
          {tasks
            .filter((task) => task.category === "In Progress")
            .map((task) => (
              <button
                key={task.name}
                className="text-lg h-12 w-2/3 my-2 bg-inprogresstask hover:bg-inprogresshover"
                onClick={() => handleTaskClick(task)}
              >
                {task.name}
              </button>
            ))}
        </div>
      </div>
      <div className="h-full w-1/3 bg-tasklistgrey grid relative">
        <div className="absolute flex h-1/6 w-full bg-finishedtask border-b-2 border-black text-xl justify-center items-center">
          Finished
        </div>
        <div className="absolute flex flex-col h-3/4 w-full mt-20 items-center">
          {tasks
            .filter((task) => task.category === "Finished")
            .map((task) => (
              <button
                key={task.name}
                className="text-lg h-12 w-2/3 my-2 bg-finishedtask hover:bg-finishedhover"
                onClick={() => handleTaskClick(task)}
              >
                {task.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

export default UpdatedTaskList;
