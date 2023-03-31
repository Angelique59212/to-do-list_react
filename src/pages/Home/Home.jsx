import "./Home.css";
import { Header } from "../../components/Header/Header";
import { AddTask } from "../../components/AddTask/AddTask";
import { useState } from "react";
import { ListTask } from "../../components/ListTask/ListTask";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";

export const Home = function () {
  const [listTask, setListTask] = useState([]);
  const [isTaskUpdated, setIsTaskUpdated] = useState(false);

  const handleRemoveChecked = () => {
    setListTask(listTask.filter((task) => !task.remove));
    setIsTaskUpdated(false);
  };

  return (
    <div className="container">
      <div className="container-todo">
        <Header />
        <AddTask
          setIsTaskUpdated={setIsTaskUpdated}
          listTask={listTask}
          setListTask={setListTask}
        />
        <ListTask
          setIsTaskUpdated={setIsTaskUpdated}
          listTask={listTask}
          setListTask={setListTask}
        />
        <ProgressBar listTask={listTask} />
        <div className="delete">
          <button onClick={handleRemoveChecked}>Remove checked</button>
        </div>
      </div>
    </div>
  );
};
