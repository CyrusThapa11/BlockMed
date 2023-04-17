/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpWv0SahrzANxsDaA1rfH7xVSvDuMitPY",
  authDomain: "health-346f8.firebaseapp.com",
  projectId: "health-346f8",

  storageBucket: "health-346f8.appspot.com",
  messagingSenderId: "786401000932",
  appId: "1:786401000932:web:6cea807996d82a334fdbf1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;
