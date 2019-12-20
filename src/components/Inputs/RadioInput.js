import React from "react";

const RadioInput = ({ label, name, onChange, value = false }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="radio"
        id={name}
        onChange={event => onChange(name, !value)}
        value={value}
      ></input>
    </div>
  );
};

export default RadioInput;
