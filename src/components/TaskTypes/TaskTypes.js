import React, { useState } from "react";

import AddTask from "../Tasks/AddTask";
import TaskTypesList from "../Tasks/TasksTypesList";

import "./TaskTypes.css";

const TaskTypes = () => {
  const [activeTask, setActiveTask] = useState(null);
  return (
    <section className="TaskTypes">
      {activeTask ? (
        <AddTask
          defaultValues={activeTask}
          onSuccess={() => setActiveTask(null)}
        />
      ) : (
        <TaskTypesList setActiveTask={setActiveTask} />
      )}
    </section>
  );
};

export default TaskTypes;
