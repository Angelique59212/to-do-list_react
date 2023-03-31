import "./AddTask.css";
import { useState } from "react";
export const AddTask = function ({ setIsTaskUpdated, listTask, setListTask }) {
  const [inputAdd, setInputAdd] = useState("");
  const handleAddTask = () => {
    const newTask = { id: listTask.length + 1, text: inputAdd, remove: false };
    setListTask([...listTask, newTask]);
    setIsTaskUpdated(true);
    setInputAdd("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask();
  }

  return (
    <div className="add-task">
      <input
        type="text"
        value={inputAdd}
        onChange={(e) => setInputAdd(e.target.value)}
      />
      <button type="submit" className="add" onClick={handleSubmit}>
        +
      </button>
    </div>
  );
};
