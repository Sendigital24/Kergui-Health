// src/Dashboard/Header.js
import React, { useEffect, useState } from "react";
import { FaUserCircle, FaBell } from "react-icons/fa";
import "./header.css";
import { useNotification } from "../Contexts/NotificationContext";

const Header = () => {
  const [text, setText] = useState("Bienvenue dans Keurgui Health...");
  const [showNotifModal, setShowNotifModal] = useState(false);
  const { notifications } = useNotification();

  useEffect(() => {
    const interval = setInterval(() => {
      setText((prevText) =>
        prevText.includes("Bienvenue")
          ? "Explorez des consultations médicales en ligne rapides et sécurisées..."
          : "Bienvenue dans Keurgui Health..."
      );
    }, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header relative flex items-center justify-between p-4 bg-white shadow">
      <div className="slider-container-unique">
        <p className="slider-text">{text}</p>
      </div>

      <div className="relative">
        <FaBell size={30} onClick={() => setShowNotifModal(!showNotifModal)} className="cursor-pointer" />
        {notifications.length > 0 && (
          <span className="absolute top-0 right-0 bg-red-600 text-white text-xs px-1.5 rounded-full">
            {notifications.length}
          </span>
        )}
        {showNotifModal && (
          <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg border rounded z-50">
            <div className="p-2 font-bold border-b">Rendez-vous récents</div>
            {notifications.length === 0 ? (
              <p className="p-2 text-sm text-gray-600">Aucune notification.</p>
            ) : (
              <ul className="max-h-64 overflow-y-auto">
                {notifications.map((notif, index) => (
                  <li key={index} className="p-2 text-sm hover:bg-gray-100">
                    <div className="font-medium">{notif.message}</div>
                    <div className="text-xs text-gray-500">{notif.date}</div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>

      <div className="user-icon">
        <FaUserCircle size={30} />
      </div>
    </div>
  );
};

export default Header;
