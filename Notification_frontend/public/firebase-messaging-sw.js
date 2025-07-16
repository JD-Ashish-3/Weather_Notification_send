// public/firebase-messaging-sw.js
self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;

firebase.initializeApp({
  apiKey: apiKey, 
  authDomain: authDomain, 
  projectId: projectId,
  storageBucket: storageBucket, 
  messagingSenderId: messagingSenderId, 
  appId: appId, 
});

const messaging = firebase.messaging();
