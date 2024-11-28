import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: "sublimat-coder",
  storageBucket: "sublimat-coder.firebasestorage.app",
  messagingSenderId: "1046006141435",
  appId: "1:1046006141435:web:534beb5779d01a6354fb5e"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore (app);
