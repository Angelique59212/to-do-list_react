import "./Home.css";
import { Header } from "../../components/Header/Header";
import { AddTask } from "../../components/AddTask/AddTask";
import { Task } from "../../components/Task/Task";
import { useState } from "react";

export const Home = function () {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleFormSubmit = (e) => {
    const newTask = { name: inputValue, completed: false };
    setTasks([...tasks, newTask]);
    setInputValue("");
  };
  return (
    <div className="container">
      <div className="container-todo">
        <Header />
        <AddTask
          onSubmit={handleFormSubmit}
          value={inputValue}
          onChange={handleInputChange}
        />
        <Task tasks={tasks} />
      </div>
    </div>
  );
};
