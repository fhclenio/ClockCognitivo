import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3aNTywko6FakbrpJwPe5cQ5c9CL9vX-E",
  authDomain: "clockcognitivo.firebaseapp.com",
  projectId: "clockcognitivo",
  storageBucket: "clockcognitivo.appspot.com",
  messagingSenderId: "752338048946",
  appId: "1:752338048946:web:5661c6a12ac8a268cd76ab",
  measurementId: "G-KVDRVT9EBV",
};

export const firebase = initializeApp(firebaseConfig);