// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "YOUR_API_KEY_HERE", // IMPORTANT: Please replace this with your actual Firebase project API key.
  authDomain: "aitkmce-8948c.firebaseapp.com",
  databaseURL: "https://aitkmce-8948c-default-rtdb.firebaseio.com",
  projectId: "aitkmce-8948c",
  storageBucket: "aitkmce-8948c.appspot.com",
  messagingSenderId: "1052812044903",
  appId: "1:1052812044903:web:cc3bfc559d92c827bd42c2",
  measurementId: "G-M1727LVFQX"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

export { app, firestore };
