import React, { useEffect, useState } from "react";
import axios from "axios";
import uuid from "uuid/v4";

import Dropzone from "../dropzone/Dropzone";
import Dropzone2 from "../dropzone/Dropzone2";
import Task from "./Task";

import "./Kanbanboard.css";

const Kanbanboard = () => {
  const [activeTasks, setActiveTasks] = useState([]);

  useEffect(() => {
    axios
      .get("https://studiorganiser.firebaseio.com/kanban.json")
      .then(response => {
        const ids = Object.keys(response.data);
        const newTasks = [];
        ids.forEach(id => {
          newTasks.push({
            ...response.data[id],
            id
          });
          //console.log("New Tasks", newTasks);
        });
        setActiveTasks(newTasks);
      });
  }, []);

  return (
    <div className="Kanbanboard-box">
      {activeTasks.map(task => (
        <Task key={task.id} taskType={task.taskType} managers={task.managers}>
          {task.taskName}
        </Task>
      ))}
      {/* <Dropzone tasks={activeTasks} /> */}
      <Dropzone2
        tasks={[activeTasks.map(t => ({ id: t.id, content: t.taskName }))]}
      />
    </div>
  );
};

export default Kanbanboard;
