import React from "react";

import "./TextInput.css";

const TextInput = ({ label, name, value = "", onChange }) => {
  return (
    <div className="TextInput">
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        onChange={event => onChange(name, event.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default TextInput;
