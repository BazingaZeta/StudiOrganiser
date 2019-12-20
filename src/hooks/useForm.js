import { useState } from "react";

const useForm = (defaultValues = {}) => {
  const [values, setValues] = useState(defaultValues);

  const onChange = (name, value) => {
    console.log(name, value);
    setValues(prevState => {
      return { ...prevState, [name]: value };
    });
  };

  return { onChange, values };
};

export default useForm;
