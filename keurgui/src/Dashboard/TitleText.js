import React from "react";

const TitleText = ({ title, text }) => {
  return (
    <div className="title-text">
      <h2>{title}</h2>
      <p>{text}</p>
    </div>
  );
};

export default TitleText;
