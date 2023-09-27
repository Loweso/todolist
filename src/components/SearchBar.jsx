import React, { useState } from "react";
import { redirect } from "react-router-dom";

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log(searchQuery);
    redirect(`/search/${searchQuery}`);
  };

  return (
    <div className="h-1/3 w-1/4 mr-16 flex">
      <input
        className="h-1/3 w-3/4 bg-white bg-opacity-40 ml-8 p-5 box-border rounded-full placeholder-white"
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      ></input>
      <button className="mx-5" onClick={handleSearch}>
        <img
          className="w-7 h-7 invert"
          src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"
          alt="search icon"
        ></img>
      </button>
    </div>
  );
}
