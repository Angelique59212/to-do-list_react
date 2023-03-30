import "./Task.css";
import { AiFillCloseCircle, AiFillDownCircle } from "react-icons/ai";

export const Task = function ({ task, setIsTaskUpdated }) {
  return (
    <div className="container-task">
      <div className="task">
        <div className="icons">
          <span className="valid">
            <AiFillDownCircle />
          </span>
          <span className="delete">
            <AiFillCloseCircle />
          </span>
        </div>
      </div>
    </div>
  );
};
