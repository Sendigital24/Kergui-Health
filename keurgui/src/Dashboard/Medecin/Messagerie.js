import React, { useState, useEffect } from "react";
import "./messagerie.css";

const Messagerie = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Récupère les messages depuis l'API ou la base de données
    // Remplace cette fonction par l'appel à ton API
    const fetchMessages = async () => {
      // Exemple d'appel API pour récupérer les messages
      // const response = await fetch("/api/messages");
      // const data = await response.json();
      // setMessages(data);

      // Simulation de données
      setMessages([
        { id: 1, user: "Médecin", content: "Bonjour, comment puis-je vous aider ?", timestamp: "12:30" },
        { id: 2, user: "Patient", content: "J'ai une question concernant mon traitement.", timestamp: "12:35" },
      ]);
    };

    fetchMessages();
  }, []);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Envoie le message à l'API (remplace avec l'appel API réel)
      // Exemple d'appel API pour envoyer le message
      // await fetch("/api/sendMessage", { method: "POST", body: { message: newMessage } });

      // Ajoute le message localement (en attendant l'intégration avec l'API)
      const newMsg = {
        id: messages.length + 1,
        user: "Médecin",
        content: newMessage,
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages([...messages, newMsg]);
      setNewMessage(""); // Vide le champ de saisie
    }
  };

  return (
    <div className="messagerie-container">
      <div className="messagerie-header">
        <h2>Messagerie</h2>
      </div>
      <div className="messages-list">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`message ${message.user === "Médecin" ? "doctor" : "patient"}`}
          >
            <div className="message-content">
              <span className="message-user">{message.user}</span>
              <span className="message-time">{message.timestamp}</span>
            </div>
            <p>{message.content}</p>
          </div>
        ))}
      </div>
      <div className="message-input">
        <textarea
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Écrivez votre message..."
        />
        <button onClick={handleSendMessage}>Envoyer</button>
      </div>
    </div>
  );
};

export default Messagerie;
