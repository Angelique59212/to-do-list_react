import "./Home.css";
import { Header } from "../../components/Header/Header";
import { AddTask } from "../../components/AddTask/AddTask";
import { Task } from "../../components/Task/Task";
import { useState } from "react";

export const Home = function () {
  const [listTask, setListTask] = useState([]);
  const [isTaskUpdated, setIsTaskUpdated] = useState(false);

  if (isTaskUpdated) {
    setListTask(listTask);
    setIsTaskUpdated(false);
  }

  return (
    <div className="container">
      <div className="container-todo">
        <Header />
        <AddTask />
        <Task tasks={listTask} />
        <div className="delete">
          <button>Remove checked</button>
        </div>
      </div>
    </div>
  );
};
