// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcfgCv0Z4sCmx4xJwTpogm9VzqMaTo-LE",
  authDomain: "payment-tracker-85a1a.firebaseapp.com",
  projectId: "payment-tracker-85a1a",
  storageBucket: "payment-tracker-85a1a.appspot.com",
  messagingSenderId: "283140359068",
  appId: "1:283140359068:web:611f5465749047d6077e59",
  measurementId: "G-4S5QR5PR7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }
export default getAuth