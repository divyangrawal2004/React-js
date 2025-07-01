// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATDAiVUCj3x4GfPE_GEiTMQQB5Gta5wJM",
  authDomain: "fir-crud-130de.firebaseapp.com",
  databaseURL: "https://fir-crud-130de-default-rtdb.firebaseio.com",
  projectId: "fir-crud-130de",
  storageBucket: "fir-crud-130de.firebasestorage.app",
  messagingSenderId: "915010158083",
  appId: "1:915010158083:web:eb77d5feea00b9f4041836",
  measurementId: "G-6ZMN88L73X"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);