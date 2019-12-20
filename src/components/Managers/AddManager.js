import React, { useState } from "react";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "../../UI/Button";
import NumberInput from "../Inputs/NumberInput";
import CheckboxInput from "../Inputs/CheckboxInput";
import TextInput from "../Inputs/TextInput";

import useForm from "../../hooks/useForm";

const AddManager = ({ onSuccess, defaultValues }) => {
  const [submitting, setSubmitting] = useState(false);
  const { onChange, values } = useForm(defaultValues);

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      setSubmitting(true);
      if (values.id) {
        await axios.put(
          `https://studiorganiser.firebaseio.com/test/${values.id}.json`,
          values
        );
      } else {
        await axios.post(
          "https://studiorganiser.firebaseio.com/test.json",
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
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <TextInput
              label="Manager Name"
              name="name"
              onChange={onChange}
              value={values.name}
            />
            <NumberInput
              label="Manager age"
              max={100}
              min={0}
              name="age"
              onChange={onChange}
              value={values.age}
            />
            <CheckboxInput
              label="Active"
              onChange={onChange}
              value={values.active}
              name="active"
            />
            <Button type="submit">Submit Manager</Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AddManager;
