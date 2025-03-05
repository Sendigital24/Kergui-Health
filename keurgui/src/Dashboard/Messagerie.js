// Messagerie.js
import React, { useState } from "react";
import { FaPaperPlane, FaPaperclip, FaSmile } from "react-icons/fa";
import "./messagerie.css"; // Importation du CSS

const Messagerie = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([
    { user: "John Doe", text: "Salut, comment ça va ?", time: "12:45" },
    { user: "Vous", text: "Ça va bien, merci ! Et toi ?", time: "12:46" },
  ]);

  // Fonction pour envoyer un message
  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { user: "Vous", text: message, time: "12:47" }]);
      setMessage("");
    }
  };

  return (
    <div className="messagerie-container">
      <div className="messagerie-header">
        <h3>Messagerie</h3>
      </div>

      <div className="messagerie-body">
        <div className="message-list">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.user === "Vous" ? "sent" : "received"}`}>
              <p><strong>{msg.user}</strong> <span className="time">{msg.time}</span></p>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="messagerie-footer">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Écrivez un message..."
        />
        <button onClick={handleSendMessage}><FaPaperPlane /></button>
        <button><FaPaperclip /></button>
        <button><FaSmile /></button>
      </div>
    </div>
  );
};

export default Messagerie;
