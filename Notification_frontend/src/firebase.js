// src/firebase.js
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const apiKey = import.meta.env.VITE_API_KEY;
const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
const projectId = import.meta.env.VITE_PROJECT_ID;
const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
const appId = import.meta.env.VITE_APP_ID;
console.log("hello");
const firebaseConfig = {
 apiKey: apiKey, 
  authDomain: authDomain, 
  projectId: projectId,
  storageBucket: storageBucket, 
  messagingSenderId: messagingSenderId, 
  appId: appId,
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export { messaging };
