import React, { useState, useEffect } from "react";
import axios from "../../axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import InputMapCheckbox from "../Inputs/InputMapCheckbox";
import InputMapRadio from "../Inputs/InputMapRadio";
import TextInput from "../Inputs/TextInput";

import useForm from "../../hooks/useForm";
import "./TasksForm.css";

const TasksForm = () => {
  const [managers, setManagers] = useState([]);
  const [taskTypes, setTaskTypes] = useState([]);
  const [loading, setLoading] = useState(false);
  const { onChange, values } = useForm();

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://studiorganiser.firebaseio.com/test.json")
      .then(response => {
        const ids = Object.keys(response.data);
        const newManagers = [];
        ids.forEach(id => {
          newManagers.push({
            name: response.data[id].name,
            id,
            active: response.data[id].active
          });
        });
        setManagers(newManagers.filter(manager => manager.active));
      });

    axios
      .get("https://studiorganiser.firebaseio.com/tasks.json")
      .then(response => {
        const ids = Object.keys(response.data);
        const newTaskTypes = [];
        ids.forEach(id => {
          newTaskTypes.push({
            display: (
              <span style={{ color: response.data[id].taskColor }}>
                {response.data[id].taskType}
              </span>
            ),
            value: id
          });
        });
        setTaskTypes(newTaskTypes);
        setLoading(false);
      });
  }, []);

  const submitHandler = async event => {
    event.preventDefault();
    console.log(values);
    await axios.post(
      "https://studiorganiser.firebaseio.com/kanban.json",
      values
    );
  };

  return (
    <section className="TasksForm">
      <Card>
        <form onSubmit={submitHandler}>
          <TextInput
            label="Task Name"
            name="taskName"
            value={values.taskName}
            onChange={onChange}
          />
          {loading ? (
            <FontAwesomeIcon icon="circle-notch" spin size="lg" />
          ) : (
            <div>
              <label htmlFor="manager">Manager &amp; Task Type</label>
              <div className="managersAndTasks">
                <InputMapCheckbox
                  name="managers"
                  options={managers}
                  onChange={onChange}
                  value={values.managers}
                />
                <div className="inputMapRadio">
                  <InputMapRadio
                    name="taskType"
                    options={taskTypes}
                    onChange={onChange}
                    value={values.taskType}
                  />
                </div>
              </div>
              <Button type="submit">Add Task to the Board</Button>
            </div>
          )}
        </form>
      </Card>
    </section>
  );
};

export default TasksForm;
