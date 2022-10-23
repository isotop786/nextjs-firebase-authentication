
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA9OWAzB7pDgCrQEY6s0MrFvyV9anUBHrE",
  authDomain: "next-firebase-auth-8d2c5.firebaseapp.com",
  projectId: "next-firebase-auth-8d2c5",
  storageBucket: "next-firebase-auth-8d2c5.appspot.com",
  messagingSenderId: "470618269236",
  appId: "1:470618269236:web:61908541c210548e6f8c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();