import React from "react";
import Body from "./components/Body";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="flex flex-col h-full">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
