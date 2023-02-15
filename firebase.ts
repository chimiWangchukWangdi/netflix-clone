// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAAyTLNJKsaam34fXU0onT7wJuxPiA_2FQ",
  authDomain: "netflix-clone-79b06.firebaseapp.com",
  projectId: "netflix-clone-79b06",
  storageBucket: "netflix-clone-79b06.appspot.com",
  messagingSenderId: "549157011978",
  appId: "1:549157011978:web:48a2b5829f54a8f6e515f3",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
