import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCdjmfWRy0Is2it_CFuCpa-OmxO_XWz9is",
  authDomain: "rpback-1b87f.firebaseapp.com",
  projectId: "rpback-1b87f",
  storageBucket: "rpback-1b87f.appspot.com",
  messagingSenderId: "70979868998",
  appId: "1:70979868998:web:2d2c5fc19da7702abced47",
  measurementId: "G-8QYY3QB1YC"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

