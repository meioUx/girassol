// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDECw7rJ8wFNlc5qYsQW9xD9CLVAcwr_BI",
    authDomain: "girassol-9570a.firebaseapp.com",
    projectId: "girassol-9570a",
    storageBucket: "girassol-9570a.appspot.com",
    messagingSenderId: "814808329171",
    appId: "1:814808329171:web:34e4d03c202ee9c08d5d26",
    measurementId: "G-1EX0ETWCP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);