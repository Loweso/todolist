import './App.css';
import React, { useState } from 'react';
import { Select } from './components/Button';
import ToDoListModal from './components/Modal';

function App() {
  //naming convention on boolean variables
  const [isOpen, setIsOpen] = useState(false);

  //create a function to handle different actions such as clicking a button
  const handleModalOpen = () => {
    setIsOpen(true);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          To-Do List
          <button className="btn btn-primary" type="button" onClick={handleModalOpen}>
            Add Task
          </button>
          <Select>
            <option>All</option>
            <option>Incomplete</option>
            <option>Complete</option>
          </Select>
        </h2>
        <div className="taskRoll">
          <p>No activities yet!</p>
        </div>
        {isOpen && <ToDoListModal setIsOpen={setIsOpen} />}
      </header>
    </div>
  );
}

export default App;
