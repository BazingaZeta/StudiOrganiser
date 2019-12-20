import React from "react";

import "./InputMapRadio.css";

const InputMapRadio = ({ onChange, options, name, value }) => {
  return (
    <div className="InputMapRadio">
      {options.map(item => (
        <div className="radioInput" key={item.value}>
          <input
            type="radio"
            name={name}
            checked={value === item.value}
            onChange={() => onChange(name, item.value)}
          />
          {item.display}
        </div>
      ))}
    </div>
  );
};

export default InputMapRadio;
