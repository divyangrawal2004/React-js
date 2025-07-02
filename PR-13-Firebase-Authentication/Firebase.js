// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBctCkYqKKNaRvAy7q5WeYxex38yS1hGrI",
  authDomain: "pr-12-firebase-firestore.firebaseapp.com",
  projectId: "pr-12-firebase-firestore",
  storageBucket: "pr-12-firebase-firestore.firebasestorage.app",
  messagingSenderId: "394456678869",
  appId: "1:394456678869:web:e0f105ed42a39fae493d5c",
  measurementId: "G-Q945J35WDD"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const googleAuthProvider = new GoogleAuthProvider()
const analytics = getAnalytics(app);