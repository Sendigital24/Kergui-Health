import React from "react";

const TitleText = ({ title, text }) => {
  return (
    <div className="title-text">
      <h5>{title}</h5>
      <p>{text}</p>
    </div>
  );
};

export default TitleText;
