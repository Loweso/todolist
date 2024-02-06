import React from "react";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const handleTodoList = () => {
    navigate("/");
  };
  const handleAboutUs = () => {
    navigate("/aboutUs");
  };

  return (
    <div className="bg-navbarcolor fixed flex h-28 w-full justify-between items-center z-10">
      <div className="ml-24 flex">
        <button className="mx-5" onClick={handleTodoList}>
          <p className="flex text-3xl text-opacity-50">
            <b>TODOLIST</b>
          </p>
        </button>
        <button className="mx-5" onClick={handleAboutUs}>
          <p className="flex text-2xl ml-24 text-opacity-50">
            <b>About Us</b>
          </p>
        </button>
      </div>
      <SearchBar />
    </div>
  );
}
