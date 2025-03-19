import React, { useState } from 'react';
import axios from 'axios';

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setMessage('Les mots de passe ne correspondent pas');
      return;
    }

    try {
      const response = await axios.post('/api/change-password', {
        userId: 'USER_ID', // Remplacez par l'ID de l'utilisateur
        oldPassword,
        newPassword
      });

      setMessage(response.data.message);
    } catch (error) {
      setMessage('Erreur lors du changement de mot de passe');
    }
  };

  return (
    <div>
      <h2>Changer le mot de passe</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Ancien mot de passe</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Nouveau mot de passe</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Confirmer le nouveau mot de passe</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Changer le mot de passe</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ChangePassword;
