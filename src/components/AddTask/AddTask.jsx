import "./AddTask.css";
import { useState } from "react";
export const AddTask = function ({ add }) {
  const [inputAdd, setInputAdd] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    add(inputAdd);
    setInputAdd("");
  }

  return (
    <div className="add-task">
      <input
        type="text"
        value={inputAdd}
        onChange={(e) => setInputAdd(e.target.value)}
      />
      <button type="submit" className="add" onChange={handleSubmit}>
        +
      </button>
    </div>
  );
};
