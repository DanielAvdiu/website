import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_MY_APP_apiKey,
  authDomain: import.meta.env.VITE_REACT_MY_APP_authDomain,
  projectId: import.meta.env.VITE_REACT_MY_APP_projectId,
  storageBucket: import.meta.env.VITE_REACT_MY_APP_storageBucket,
  messagingSenderId: import.meta.env.VITE_REACT_MY_APP_messagingSenderId,
  appId: import.meta.env.VITE_REACT_MY_APP_appId,
  measurementId: import.meta.env.VITE_REACT_MY_APP_measurementId,
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

