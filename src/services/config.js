import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';



const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "javi-ae311.firebaseapp.com",
  projectId: "javi-ae311",
  storageBucket: "javi-ae311.appspot.com",
  messagingSenderId: "784758725163",
  appId: "1:784758725163:web:9d2959e4be5c7e7991686e"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)