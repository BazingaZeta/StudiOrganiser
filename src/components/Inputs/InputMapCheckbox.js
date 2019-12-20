import React from "react";

import "./InputMapCheckbox.css";

const InputMapCheckbox = ({ options, onChange, value = [], name }) => {
  const handleChange = (name, val) => {
    if (value.includes(val)) {
      const filtered = value.filter(item => item !== val);
      onChange(name, filtered);
    } else {
      onChange(name, [...value, val]);
    }
  };

  return (
    <div className="InputMapCheckbox">
      {options.map(item => (
        <div className="checkboxInput" key={item.id}>
          <input
            type="checkbox"
            name={name}
            onChange={event =>
              handleChange(name, { name: item.name, id: item.id })
            }
          />
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default InputMapCheckbox;
