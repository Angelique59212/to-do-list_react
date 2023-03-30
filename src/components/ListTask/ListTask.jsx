import "./ListTask.css";
import { Task } from "../Task/Task";

export const ListTask = function ({ listTask, setListTask, setIsTaskUpdated }) {
  return (
    <ul className="task-list">
      {listTask.map((task) => (
        <Task
          key={task.id}
          task={task}
          setListTask={setListTask}
          setIsTaskUpdated={setIsTaskUpdated}
        />
      ))}
    </ul>
  );
};
