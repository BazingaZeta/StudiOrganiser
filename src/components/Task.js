import React, { useEffect, useState } from "react";
import axios from "axios";

import "./Task.css";

const Task = ({ children, taskType, managers }) => {
  const [taskColor, setTaskColor] = useState();

  useEffect(() => {
    axios
      .get(`https://studiorganiser.firebaseio.com/tasks/${taskType}.json`)
      .then(response => {
        const taskColor = response.data.taskColor;
        setTaskColor(taskColor);
      });
  });

  return (
    <div
      className="Task"
      style={{ backgroundColor: taskColor, borderColor: "1px solid black" }}
    >
      <h4>{children}</h4>
      <h5>Managers:</h5>
      {managers.map(m => (
        <p key={m.id}>{m.name}</p>
      ))}
    </div>
  );
};

export default Task;
