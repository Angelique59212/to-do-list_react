import "./ListTask.css";
import { Task } from "../Task/Task";

export const ListTask = function ({
  listTask,
  setIsTaskUpdated,
  setListTask,
  handleRemoveTask,
}) {
  const filterListTask = listTask.filter((task) => !task.remove);
  return (
    <ul className="task-list">
      {filterListTask.map((task) => (
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
