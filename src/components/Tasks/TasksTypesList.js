import React, { useState, useEffect } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../UI/Button";
import Card from "../../UI/Card";

import Table from "../Table";

import "./TasksTypesList.css";

const TaskTypesList = ({ setActiveTask }) => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://studiorganiser.firebaseio.com/tasks.json")
      .then(response => {
        const ids = Object.keys(response.data);
        const newTasks = [];
        ids.forEach(id => {
          newTasks.push({
            ...response.data[id],
            id
          });
        });
        setTasks(newTasks);
        setLoading(false);
      });
  }, []);

  const deleteTaskHandler = async task => {
    setLoading(true);
    await axios.delete(
      `https://studiorganiser.firebaseio.com/tasks/${task.id}.json`
    );
    const newTasks = tasks.filter(t => t.id !== task.id);
    setTasks(newTasks);
    setLoading(false);
  };

  return (
    <section className="TasksTypesList">
      <Card>
        <h3>Loaded Taks</h3>
        {loading ? (
          <FontAwesomeIcon icon="circle-notch" spin size="lg" />
        ) : (
          <Table
            headings={[
              { text: "Task Name", key: "taskType" },
              { text: "Task Color", key: "taskColor" },
              { text: "", key: "edit" },
              { text: "", key: "delete" }
            ]}
            data={tasks.map(task => ({
              ...task,
              taskColor: (
                <div
                  style={{ backgroundColor: task.taskColor, height: "20px" }}
                ></div>
              ),
              edit: (
                <FontAwesomeIcon
                  onClick={() => setActiveTask(task)}
                  icon="pen"
                />
              ),
              delete: (
                <FontAwesomeIcon
                  onClick={() => deleteTaskHandler(task)}
                  icon="trash-alt"
                  color="#8A8D8F"
                  size="lg"
                />
              )
            }))}
          />
        )}
        {!loading ? (
          <Button type="button" onClick={() => setActiveTask(true)}>
            Add Task Type
          </Button>
        ) : null}
      </Card>
    </section>
  );
};

export default TaskTypesList;
