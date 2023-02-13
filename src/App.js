import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import {Button, Select} from './Button'
import 'bootstrap/dist/css/bootstrap.min.css';
import ToDoListModal from './ToDoListModal';


function App() {
  const [show, setShow] = useState(false)
  
  return (
    <div className="App">
      <header className="App-header">
            <h2>To-Do List
              <button className="btn btn-primary" type="button" onClick={() => setShow(true)}>Add Task</button>
              <Select>
                <option>All</option>
                <option>Incomplete</option>
                <option>Complete</option>
              </Select>
            </h2>
        <div className="taskRoll">
          <p>No activities yet!</p>
        </div>
        <ToDoListModal show={show} setShow={setShow} />
      </header>
    </div>
  );
}

export default App;
