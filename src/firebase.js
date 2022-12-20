// 


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlkSUO4E13l6xjeeariI3elAyn2IkGT9w",
  authDomain: "e-may-41427.firebaseapp.com",
  projectId: "e-may-41427",
  storageBucket: "e-may-41427.appspot.com",
  messagingSenderId: "396634919724",
  appId: "1:396634919724:web:0399358ed5c1a6121c9289",
  measurementId: "G-79PX85JGR8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = app.firestore();
const auth = getAuth(app);
export {auth};
