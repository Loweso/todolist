import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import defaultTasks from "./constants.jsx";
import SearchResultBox from "./SearchResultBox.jsx";

function SearchResults() {
  const { searchQuery } = useParams();

  const navigate = useNavigate();
  const handleTodoList = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <div className="flex h-full justify-center pt-20 relative mt-20">
        <div className="flex w-1/2 items-end justify-left">
          <p className="text-2xl">Search Results for: </p>
          <p className="ml-5 text-6xl"> {searchQuery} </p>
        </div>
        <div className="flex w-1/9 items-end justify-right">
          <button onClick={handleTodoList}>
            <p className="text-lg">← Back </p>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        {defaultTasks
          .filter(
            (task) =>
              task.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              task.detail.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((task) => {
            return <SearchResultBox currentTask={task} />;
          })}
      </div>
    </div>
  );
}

export default SearchResults;
