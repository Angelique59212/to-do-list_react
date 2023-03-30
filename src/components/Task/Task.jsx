import "./Task.css";
import { AiFillCloseCircle, AiFillDownCircle } from "react-icons/ai";

export const Task = function ({ task, setListTask, setIsTaskUpdated }) {
  function handleClick(e) {
    task.map((task) => (task.checked = false));
    setIsTaskUpdated(true);
  }
  return (
    <div className="container-task">
      <div className="task">
        <div className="icons">
          <span className="valid">
            <AiFillDownCircle />
          </span>
          <span className="delete" onClick={handleClick}>
            <AiFillCloseCircle />
          </span>
        </div>
      </div>
    </div>
  );
};
