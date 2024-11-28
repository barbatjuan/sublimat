// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG61dNg-aANtzaDyixREF0cudE9COj7QM",
  authDomain: "sublimat-coder.firebaseapp.com",
  projectId: "sublimat-coder",
  storageBucket: "sublimat-coder.firebasestorage.app",
  messagingSenderId: "1046006141435",
  appId: "1:1046006141435:web:534beb5779d01a6354fb5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
