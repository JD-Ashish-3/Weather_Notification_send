// src/App.jsx
import React, { useState } from 'react';
import { getToken } from 'firebase/messaging';
import { messaging } from './firebase';

const App = () => {
  const [fcmToken, setFcmToken] = useState('');
  const [error, setError] = useState('');

  const requestPermissionAndGenerateToken = async () => {
    try {
      const currentToken = await getToken(messaging, {
        vapidKey:import.meta.env.VITE_VAPID_KEY
      });

      if (currentToken) {
        setFcmToken(currentToken);
        console.log('FCM Token:', currentToken);
      } else {
        setError('No registration token available.');
      }
    } catch (err) {
      setError('An error occurred while retrieving token.');
      console.error(err);
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Generate FCM Token</h2>
      <button onClick={requestPermissionAndGenerateToken}>
        Get FCM Token
      </button>

      {fcmToken && (
        <div style={{ marginTop: 20 }}>
          <strong>FCM Token:</strong>
          <p style={{ wordBreak: 'break-word' }}>{fcmToken}</p>
        </div>
      )}

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default App;
