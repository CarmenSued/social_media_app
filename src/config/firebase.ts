// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCccnhYnAYZWFMEXvNXmJmRc-XUvIEWp_o",
  authDomain: "react-social-media-app-55832.firebaseapp.com",
  projectId: "react-social-media-app-55832",
  storageBucket: "react-social-media-app-55832.appspot.com",
  messagingSenderId: "468690729420",
  appId: "1:468690729420:web:6f45dd8e9ee2e581cdc569"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);