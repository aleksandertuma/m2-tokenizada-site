// lib/firebase.ts

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJTDA0oiyy9VJz3cMniik_CvnDJo5UMp8",
  authDomain: "m2tokenizado.firebaseapp.com",
  projectId: "m2tokenizado",
  storageBucket: "m2tokenizado.firebasestorage.app",
  messagingSenderId: "526842914991",
  appId: "1:526842914991:web:4a14cf3df32008b9020c5a",
  measurementId: "G-DXBNWG9EKC"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
