import "./Task.css";
import { AiFillCloseCircle, AiTwotoneEdit } from "react-icons/ai";

export const Task = function ({
  listTask,
  setIsTaskUpdated,
  setListTask,
  handleRemoveTask,
  isTaskUpdated,
}) {
  function handleChange() {
    const updateTask = { ...listTask, completed: !listTask.completed };
    setListTask((visualListTask) =>
      visualListTask.map((task) =>
        task.id === listTask.id ? updateTask : task
      )
    );
    setIsTaskUpdated(true);
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      const updatedTask = {
        ...listTask,
        text: event.target.value,
        edit: false,
      };
      setListTask((visualListTask) =>
        visualListTask.map((task) =>
          task.id === listTask.id ? updatedTask : task
        )
      );
      setIsTaskUpdated(true);
    }
  }

  function editTask() {
    const updatedTask = { ...listTask, edit: !listTask.edit };
    setListTask((visualListTask) =>
      visualListTask.map((task) =>
        task.id === listTask.id ? updatedTask : task
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
    handleRemoveTask(listTask.id);
    setIsTaskUpdated(!isTaskUpdated);
  }

  return (
    <div className="task">
      {listTask.completed ? (
        <input type="checkbox" onClick={handleChange} checked />
      ) : (
        <input type="checkbox" onClick={handleChange} />
      )}
      {listTask.edit ? (
        <input
          type="text"
          className="name"
          defaultValue={listTask.text}
          onKeyDown={handleKeyDown}
        />
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
