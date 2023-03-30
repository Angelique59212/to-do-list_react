import "./ListTask.css";
import { Task } from "../Task/Task";

export const ListTask = function ({ tasks, setIsTaskUpdated }) {
  return (
    <ul className="task-list">
      <li>
        <input type="checkbox" checked={tasks.task.completed} />
        {tasks.task.name}
      </li>
      {tasks.map((task) => (
        <Task key={task.id} task={task} setIsTaskUpdated={setIsTaskUpdated} />
      ))}
    </ul>
  );
};
