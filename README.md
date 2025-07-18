# 🌧️ Weather Notification System with Firebase

This project sends real-time **rain notifications** to users using **Firebase Cloud Messaging (FCM)**. It detects weather changes like **rain percentage** and **whether it will rain or not**, and delivers updates directly to user devices.

---

## 🚀 Project Overview

- 🔔 Sends push notifications with weather alerts.
- 📱 Retrieves and manages device tokens.
- 🌐 Frontend built with **React.js**, deployed on **Vercel**.
- 🧪 Backend built using **Express.js** and Firebase Admin SDK.
- ☁️ Notifications include rain data like percentage and condition (Yes/No).

---

## 📦 Tech Stack

**Frontend**
- React.js
- Firebase Messaging (Web SDK)
- Vercel (Deployment)

**Backend**
- Node.js + Express.js
- Firebase Admin SDK

---

## 🔧 How It Works

### ✅ Frontend
- Asks user permission to receive notifications.
- Retrieves FCM device token.
- Displays confirmation on successful subscription.

### ✅ Backend
- Accepts device tokens (if needed).
- Sends notifications when rain data changes (like 80% rain or “Yes” condition).
- Uses Firebase Admin SDK for sending notifications.

---

## 🌍 Live Demo

- 🔗 **Frontend Vercel URL**: [https://weather-notification-send.vercel.app/](https://weather-notification-send.vercel.app/)

---

## 📁 Project Structure
weather-notification-system/
├── backend/
│ ├── MyfcmKey.json # Firebase service account key (should be in .gitignore)
│ ├── index.js # Express backend to send notifications
│ ├── package.json
│ └── .env # Backend environment variables
│
├── frontend/
│ ├── public/
│ │ └── firebase-messaging-sw.js # Firebase service worker for notifications
│ ├── src/
│ │ ├── App.jsx # Main React component
│ │ ├── firebase-messaging.js # Firebase config and messaging setup
│ │ └── index.js
│ ├── .env # Frontend environment variables
│ ├── package.json
│ └── vite.config.js
│
├── .gitignore
├── README.md
└── LICENSE



