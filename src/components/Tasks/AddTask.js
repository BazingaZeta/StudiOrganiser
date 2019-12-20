import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../UI/Button";
import Card from "../../UI/Card";
import ColorInput from "../../components/Inputs/ColorInput";
import TextInput from "../../components/Inputs/TextInput";

import useForm from "../../hooks/useForm";

const AddTask = ({ onSuccess, defaultValues }) => {
  const [submitting, setSubmitting] = useState(false);
  const { onChange, values } = useForm(defaultValues);

  const handleSubmit = async event => {
    event.preventDefault();
    try {
      setSubmitting(true);
      if (values.id) {
        await axios.put(
          `https://studiorganiser.firebaseio.com/tasks/${values.id}.json`,
          values
        );
      } else {
        await axios.post(
          "https://studiorganiser.firebaseio.com/tasks.json",
          values
        );
      }
      onSuccess();
    } catch (e) {
      console.log(e);
      setSubmitting(true);
    }
  };

  return (
    <div>
      {submitting ? (
        <FontAwesomeIcon icon="circle-notch" spin size="lg" />
      ) : (
        <Card>
          <form onSubmit={handleSubmit} className="AddTask">
            <TextInput
              label="Task Type"
              name="taskType"
              onChange={onChange}
              value={values.taskType}
            />
            <ColorInput
              label="Task Color"
              name="taskColor"
              onChange={onChange}
              value={values.taskColor}
            />
            <Button type="submit">Submit Task Type</Button>
          </form>
        </Card>
      )}
    </div>
  );
};

export default AddTask;
