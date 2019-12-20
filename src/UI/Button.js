import React from "react";

import "./Button.css";

const Button = ({ type = "button", onClick, children }) => {
  return (
    <div className="Button">
      <button type={type} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
