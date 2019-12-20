import React from "react";

const CheckboxInput = ({ name, label, value = false, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        id={name}
        onChange={event => onChange(name, !value)}
        checked={value}
      ></input>
    </div>
  );
};

export default CheckboxInput;
