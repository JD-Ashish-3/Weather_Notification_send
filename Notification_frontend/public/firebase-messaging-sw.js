
self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
self.importScripts('https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js');

const apiKey = "AIzaSyAg-gbrNLJ94pC6K_GEP29aHULha456iDM";
const authDomain = "notification-send-dd463.firebaseapp.com";
const projectId = "notification-send-dd463";
const storageBucket = "notification-send-dd463.appspot.com";
const messagingSenderId = "757470683851";
const appId = "1:757470683851:android:534da78f188bd6d55b314e";

firebase.initializeApp({
  apiKey: apiKey, 
  authDomain: authDomain, 
  projectId: projectId,
  storageBucket: storageBucket, 
  messagingSenderId: messagingSenderId, 
  appId: appId, 
});

const messaging = firebase.messaging();
