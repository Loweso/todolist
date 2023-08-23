import React from "react";

export default function Navbar() {
  return (
    <div className="bg-navbarcolor fixed flex h-25 w-full justify-between items-center z-10">
      <p className="flex text-3xl ml-24">
        <b>TODOLIST</b>
      </p>
      <p className="flex text-3xl my-10 mr-24">Hi, Maxell</p>
    </div>
  );
}
