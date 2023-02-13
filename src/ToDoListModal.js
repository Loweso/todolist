import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const ToDoListModal = ({show, setShow}) => {
  console.log(show);
  
  const content = show && (
    <div className="modal fade">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <button
            type="button"
            onClick={() => setShow(false)}
          >
            X
          </button>
          <div><h1>AMOGUS</h1></div>
        </div>
      </div>
    </div>
  );

  return content
}

export default ToDoListModal