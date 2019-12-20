import React from "react";

const NumberInput = ({ label, name, value = "", onChange, min, max }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="number"
        id={name}
        min={min}
        max={max}
        onChange={event => onChange(name, event.target.value)}
        value={value}
      ></input>
    </div>
  );
};

export default NumberInput;
