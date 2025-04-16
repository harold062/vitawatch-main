// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCKKU52sHk7ht-UHn9HDl_I-dzoF4hdWts",
  authDomain: "vitawatch-aa8d2.firebaseapp.com",
  projectId: "vitawatch-aa8d2",
  storageBucket: "vitawatch-aa8d2.appspot.com",
  messagingSenderId: "893054429893",
  appId: "1:893054429893:android:fc8bb61e1eddbb0e855eac"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
