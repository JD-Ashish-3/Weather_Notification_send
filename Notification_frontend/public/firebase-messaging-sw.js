
self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

const apiKey = "AIzaSyCyT2vzVGKjMlEZAuPBAjbRmLQ2ucHgoO4";
const authDomain = "ashish-426e5.firebaseapp.com";
const projectId = "ashish-426e5";
const storageBucket = "ashish-426e5.firebasestorage.app";
const messagingSenderId = "1077765061784";
const appId = "1:1077765061784:android:bc76caea1eb56bc17d64ed";


firebase.initializeApp({
  apiKey: apiKey, 
  authDomain: authDomain, 
  projectId: projectId,
  storageBucket: storageBucket, 
  messagingSenderId: messagingSenderId, 
  appId: appId, 
});

const messaging = firebase.messaging();
