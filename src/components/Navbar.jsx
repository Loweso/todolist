import React from "react";
import SearchBar from "./SearchBar";

export default function Navbar() {
  return (
    <div className="bg-navbarcolor fixed flex h-28 w-full justify-between items-center z-10">
      <div className="ml-24 flex">
        <p className="flex text-3xl">
          <b>TODOLIST</b>
        </p>
        <button className="mx-5">
          <p className="flex text-2xl ml-24 text-opacity-50">
            <b>About Us</b>
          </p>
        </button>
      </div>
      <SearchBar />
    </div>
  );
}
