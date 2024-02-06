import React from "react";

const SearchResultBox = (props) => {
  const { currentTask } = props;

  return (
    <div className="flex justify-between items-center bg-white w-2/3 mt-10 px-24 py-5 rounded-3xl shadow-xl">
      <p className="text-4xl w-1/3 text-slate-600">
        <b>{currentTask.name}</b>
      </p>
      <p className="w-1/2 text-xl">{currentTask.detail}</p>
    </div>
  );
};

export default SearchResultBox;
