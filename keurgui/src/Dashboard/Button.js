import React from "react";
import "./button.css"; 

const Button = ({ text, onClick, color }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${color === "blue" ? "button-blue" : "button-green"}`}
    >
      {text}
    </button>
  );
};

export default Button;
