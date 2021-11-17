// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOH5oIBrFhHtDsmh1YbnRHhSsS-FVL6yU",
  authDomain: "makers-community.firebaseapp.com",
  projectId: "makers-community",
  storageBucket: "makers-community.appspot.com",
  messagingSenderId: "153192757247",
  appId: "1:153192757247:web:7e64e2dc096133508dd9ca",
  measurementId: "G-MM4W9DX6RP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


const firestore = getFirestore(app);
const auth = getAuth(app)

module.exports = { firestore,auth, app}