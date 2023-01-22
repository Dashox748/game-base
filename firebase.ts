// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { GoogleAuthProvider } from "@firebase/auth";
import { getFirestore } from "@firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBk7CDUs2RtRQIWqeskanyFF_hGgMk8yiY",
  authDomain: "game-base-7e50f.firebaseapp.com",
  projectId: "game-base-7e50f",
  storageBucket: "game-base-7e50f.appspot.com",
  messagingSenderId: "345204626087",
  appId: "1:345204626087:web:79ed767d6546432765c182",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { app, auth, provider, db };
