// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2b357.firebaseapp.com",
  projectId: "mern-estate-2b357",
  storageBucket: "mern-estate-2b357.appspot.com",
  messagingSenderId: "1027126311933",
  appId: "1:1027126311933:web:a008dfb4722f536caa3794"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);