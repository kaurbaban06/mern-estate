// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-27cb7.firebaseapp.com",
  projectId: "mern-estate-27cb7",
  storageBucket: "mern-estate-27cb7.firebasestorage.app",
  messagingSenderId: "866716863466",
  appId: "1:866716863466:web:94a3071e2f655a58398093"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);