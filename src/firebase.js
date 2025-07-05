import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "react-portfolio-abhishek.firebaseapp.com",
  projectId: "react-portfolio-abhishek",
  storageBucket: "react-portfolio-abhishek.appspot.com",
  messagingSenderId: "278164302078",
  appId: "1:278164302078:web:797fe5960bb12b5fca1daf",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore();
