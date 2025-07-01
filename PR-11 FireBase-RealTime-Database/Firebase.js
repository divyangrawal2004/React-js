// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsYaP9zhrygRxEOVBUKGR6gnVSfrEpbO8",
  authDomain: "pr-11-firebase-database.firebaseapp.com",
  projectId: "pr-11-firebase-database",
  storageBucket: "pr-11-firebase-database.firebasestorage.app",
  messagingSenderId: "481256936788",
  appId: "1:481256936788:web:fe5a0a873a2a6bb0c164c1",
  measurementId: "G-SM05TGWYRJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);