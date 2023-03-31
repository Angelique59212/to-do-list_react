import "./Task.css";
import { AiFillCloseCircle, AiTwotoneEdit } from "react-icons/ai";

export const Task = function ({ listTask, setIsTaskUpdated, setListTask }) {
  function handleChange() {
    const updateTask = { ...listTask, completed: !listTask.completed };
    setListTask((visualListTask) =>
      visualListTask.map((task) =>
        task.id === listTask.id ? updateTask : task
      )
    );
    setIsTaskUpdated(true);
  }

  function editTask() {
    const updateTask = { ...listTask, edit: !listTask.edit };
    setListTask((visualListTask) =>
      visualListTask.map((task) =>
        task.id === listTask.id ? updateTask : task
      )
    );
    setIsTaskUpdated(true);
  }

  function deleteTask() {
    const updateTask = { ...listTask, remove: true };
    setListTask((visualListTask) =>
      visualListTask.map((task) =>
        task.id === listTask.id ? updateTask : task
      )
    );
    setIsTaskUpdated(true);
  }

  return (
    <div className="task">
      {listTask.completed ? (
        <input type="checkbox" onClick={handleChange} checked />
      ) : (
        <input type="checkbox" onClick={handleChange} />
      )}
      {listTask.edit ? (
        <input type="text" className="name" />
      ) : (
        <span className={`name ${listTask.completed ? "completed" : ""}`}>
          {listTask.text}
        </span>
      )}
      <div className="icons">
        <span className="edit" onClick={editTask}>
          <AiTwotoneEdit />
        </span>
        <span className="delete" onClick={deleteTask}>
          <AiFillCloseCircle />
        </span>
      </div>
    </div>
  );
};
