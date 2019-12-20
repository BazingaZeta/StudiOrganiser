import React from "react";

const ColorInput = ({ label, name, value = "", onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="color"
        id={name}
        onChange={event => onChange(name, event.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default ColorInput;
