import "./ProgressBar.css";

import { useState, useEffect } from "react";

export const ProgressBar = ({ listTask }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const completedTasks = listTask.filter((task) => task.completed);
    const progressPercentage =
      completedTasks.length > 0
        ? Math.round((completedTasks.length / listTask.length) * 100)
        : 0;
    setProgress(progressPercentage);
  }, [listTask]);

  return (
    <div className="container-bar">
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }}>
          <span className="pourcent-progress">{progress}%</span>
        </div>
      </div>
    </div>
  );
};
