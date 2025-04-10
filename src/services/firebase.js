// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDx4AynxLhEwW-HfsZdY6JVmWE3zxQ6iAQ",
  authDomain: "katha-377e1.firebaseapp.com",
  projectId: "katha-377e1",
  storageBucket: "katha-377e1.firebasestorage.app",
  messagingSenderId: "927589161865",
  appId: "1:927589161865:web:dee8739df15fe667e45f58",
  measurementId: "G-QFR368BQZR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
