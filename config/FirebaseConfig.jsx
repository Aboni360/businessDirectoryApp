// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "business-directory-ac320.firebaseapp.com",
  projectId: "business-directory-ac320",
  storageBucket: "business-directory-ac320.firebasestorage.app",
  messagingSenderId: "799733558874",
  appId: "1:799733558874:web:ef49a85cc7d8cb32c17263",
  measurementId: "G-1N7W7ZR0D9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
