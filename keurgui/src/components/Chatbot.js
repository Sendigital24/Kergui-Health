import React, { useState, useRef, useEffect } from 'react';
import { FaFacebookMessenger } from 'react-icons/fa';

export default function Chatbot() {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const chatEndRef = useRef(null);
  const [quizState, setQuizState] = useState({ isInQuiz: false, quizIndex: 0 });

  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const sendMessage = async () => {
    if (!message.trim()) return;

    setChatHistory(prev => [...prev, { sender: 'user', text: message }]);

    try {
      const response = await fetch('http://localhost:3000/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message, state: quizState }),
      });

      if (!response.ok) throw new Error('Erreur réseau');

      const data = await response.json();

      setChatHistory(prev => [...prev, { sender: 'bot', text: data.reply }]);

      if (data.newState) {
        setQuizState(data.newState);
      } else {
        setQuizState({ isInQuiz: false, quizIndex: 0 });
      }
    } catch (error) {
      setChatHistory(prev => [
        ...prev,
        { sender: 'bot', text: "Erreur de connexion au serveur." },
      ]);
    }

    setMessage('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* Icône Messenger fixe */}
      <button
        onClick={() => setIsOpen(true)}
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          backgroundColor: '#0078FF',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 60,
          height: 60,
          boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
          cursor: 'pointer',
          zIndex: 1000,
        }}
        aria-label="Ouvrir le chatbot"
      >
        <FaFacebookMessenger size={28} />
      </button>

      {/* Modal du Chatbot */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              width: '90%',
              maxWidth: 600,
              backgroundColor: 'white',
              borderRadius: 10,
              padding: 20,
              position: 'relative',
            }}
          >
            <button
              onClick={() => setIsOpen(false)}
              style={{
                position: 'absolute',
                top: 10,
                right: 10,
                background: 'transparent',
                border: 'none',
                fontSize: 20,
                cursor: 'pointer',
              }}
            >
              ×
            </button>

            <h2 style={{ textAlign: 'center' }}>Assistant de Télémédecine</h2>

            <div
              style={{
                border: '1px solid #ccc',
                padding: 10,
                height: 300,
                overflowY: 'auto',
                marginBottom: 10,
                borderRadius: 5,
                backgroundColor: '#f9f9f9',
              }}
            >
              {chatHistory.length === 0 && (
                <p>Envoyez un message pour commencer la conversation...</p>
              )}
              {chatHistory.map((msg, idx) => (
                <div
                  key={idx}
                  style={{
                    textAlign: msg.sender === 'user' ? 'right' : 'left',
                    marginBottom: 8,
                  }}
                >
                  <div
                    style={{
                      display: 'inline-block',
                      padding: '8px 12px',
                      borderRadius: 15,
                      backgroundColor: msg.sender === 'user' ? '#01a768' : '#ddd',
                      color: msg.sender === 'user' ? 'white' : 'black',
                      maxWidth: '80%',
                      whiteSpace: 'pre-wrap',
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <textarea
              rows={2}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Tapez votre message ici..."
              style={{
                width: '100%',
                padding: 10,
                fontSize: 16,
                borderRadius: 5,
                borderColor: '#ccc',
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                marginTop: 10,
                width: '100%',
                padding: 10,
                backgroundColor: '#01a768',
                border: 'none',
                borderRadius: 5,
                color: 'white',
                fontSize: 16,
                cursor: 'pointer',
              }}
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </>
  );
}
