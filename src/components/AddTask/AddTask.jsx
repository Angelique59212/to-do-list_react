import "./AddTask.css";
import { useState } from "react";

export const AddTask = function () {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="add-task">
      <input type="text" value={inputValue} />
      <button className="add">+</button>
    </div>
  );
};
