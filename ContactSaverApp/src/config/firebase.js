// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGHL6Qt9c-v4t0aA6YplW2Is564wSriAk",
  authDomain: "vite-contact-app-65e43.firebaseapp.com",
  projectId: "vite-contact-app-65e43",
  storageBucket: "vite-contact-app-65e43.appspot.com",
  messagingSenderId: "59062671707",
  appId: "1:59062671707:web:8c063a00d733ec6d30a27e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
