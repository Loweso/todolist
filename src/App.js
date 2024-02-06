import React, { useEffect } from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";
import defaultTasks from "./components/constants";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
