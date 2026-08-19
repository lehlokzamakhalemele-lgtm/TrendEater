window.firebaseConfig = {
  apiKey: "AIzaSyB7ddt3UBNCGNGtqnM6ySdOCJMY5WbS_Sc",
  authDomain: "trendeater-66e4f.firebaseapp.com",
  projectId: "trendeater-66e4f",
  storageBucket: "trendeater-66e4f.firebasestorage.app",
  messagingSenderId: "472425326012",
  appId: "1:472425326012:web:df1d6e0496c8f76d25b7b9",
  measurementId: "G-YW8J9P7T4N"
};

window.firebaseOwnerEmail = "YOUR-FIREBASE-OWNER-EMAIL";

window.firebaseReady = {
  initialized: false,
  app: null,
  auth: null
};

window.initializeFirebase = function () {
  if (!window.firebase || !firebase.apps) {
    console.error("Firebase SDK not loaded yet.");
    return null;
  }

  if (!firebase.apps.length) {
    firebase.initializeApp(window.firebaseConfig);
  }

  const app = firebase.app();
  const auth = firebase.auth();

  window.firebaseReady = {
    initialized: true,
    app,
    auth
  };

  return { app, auth };
};
