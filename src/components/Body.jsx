import React, { useState } from 'react'
import AddTaskModal from './TaskModal'
import '../styles/Body.css'

function Body() {
  const [isModalOpen, setModalOpen] = useState(false)

  const buttonClick = () => setModalOpen(!isModalOpen)

  return (
    <div className='body-container'>
        <button className='add-task-button'>Add Task</button>
        <div className='tasklist-container'>
            <p>Task List:</p>
            <button className='task-button' onClick={buttonClick}>Wash Laundry</button>
            <button className='task-button'>Finish Problem Set</button>
        </div>
        {isModalOpen && <AddTaskModal isModalOpen={isModalOpen} setModalOpen={setModalOpen}/>}
    </div>
  )
}

export default Body