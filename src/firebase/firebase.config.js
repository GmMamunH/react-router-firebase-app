// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8-e3G4ogQFvTHnlNluz9JDObsj7ygyjU",
  authDomain: "react-firebase-router-fedd5.firebaseapp.com",
  projectId: "react-firebase-router-fedd5",
  storageBucket: "react-firebase-router-fedd5.firebasestorage.app",
  messagingSenderId: "239467609441",
  appId: "1:239467609441:web:949acb14dc691d8a589920"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);