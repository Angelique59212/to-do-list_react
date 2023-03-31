import "./ListTask.css";
import { Task } from "../Task/Task";

export const ListTask = function ({ listTask, setIsTaskUpdated, setListTask }) {
  return (
    <ul className="task-list">
      {listTask.map((task) => (
        <Task
          key={task.id}
          listTask={task}
          setIsTaskUpdated={setIsTaskUpdated}
          setListTask={setListTask}
        />
      ))}
    </ul>
  );
};
