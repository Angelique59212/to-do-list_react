import "./Home.css";
import { Header } from "../../components/Header/Header";
import { AddTask } from "../../components/AddTask/AddTask";
import { useState } from "react";
import { ListTask } from "../../components/ListTask/ListTask";
import { ProgressBar } from "../../components/ProgressBar/ProgressBar";

export const Home = function () {
  const [listTask, setListTask] = useState([]);
  const [isTaskUpdated, setIsTaskUpdated] = useState(false);

  /**
   * delete allTasks
   */
  const handleRemoveAll = () => {
    setListTask([]);
    setIsTaskUpdated(true);
  };

  const handleRemoveTask = (taskId) => {
    setListTask(listTask.filter((task) => task.id !== taskId));
    setIsTaskUpdated(true);
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
          listTask={listTask}
          setIsTaskUpdated={setIsTaskUpdated}
          setListTask={setListTask}
          handleRemoveTask={handleRemoveTask}
          isTaskUpdated={isTaskUpdated}
        />
        <ProgressBar listTask={listTask} isTaskUpdated={isTaskUpdated} />
        <div className="delete">
          <button onClick={handleRemoveAll}>Remove checked</button>
        </div>
      </div>
    </div>
  );
};
