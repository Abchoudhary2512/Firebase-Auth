
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA3uDKg1tSsUwltwvFgxRsrbc4yc3x2NSE",
  authDomain: "temp-6642e.firebaseapp.com",
  projectId: "temp-6642e",
  storageBucket: "temp-6642e.appspot.com",
  messagingSenderId: "799719822121",
  appId: "1:799719822121:web:279cfe858328790e4d1d38",
  measurementId: "G-NCE8B6V2B6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
  export const auth = getAuth(app);

  

