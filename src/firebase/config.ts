// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Note: Firebase API keys for web apps are safe to expose publicly
// Security is enforced through Firebase Security Rules, not API key secrecy
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyBtmqnsaE7sq8ASF_oqKUUH7R-GPgbKEj0",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "simple-hikari.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "simple-hikari",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "simple-hikari.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1078800826414",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1078800826414:web:c3132ea24d0680241e1fbf",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-7JCRXMN535"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it
let analytics: any = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { app, analytics };
