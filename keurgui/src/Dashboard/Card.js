import React from "react";
import './card.css'; 

const Card = ({ title, content, buttonText, onClick }) => {
  return (
    <div className="card">
      <h3 className="card-title">{title}</h3>
      <p className="card-content">{content}</p>
      <button onClick={onClick} className="card-button">
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
