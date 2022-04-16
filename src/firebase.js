// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore, doc, getDocs, orderBy, collection, addDoc, serverTimestamp, query, onSnapshot} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA5fUE7k4KLjeneEWRlGqxYvExhKJVBLE",
  authDomain: "clone-5abc2.firebaseapp.com",
  databaseURL: "https://clone-5abc2.firebaseio.com",
  projectId: "clone-5abc2",
  storageBucket: "clone-5abc2.appspot.com",
  messagingSenderId: "438075165524",
  appId: "1:438075165524:web:a50b19639eb2461735d6c1",
};
// Initialize Firebase


initializeApp(firebaseConfig);
const db = getFirestore();
const auth = getAuth();


export {db, auth, getDocs, collection, addDoc, serverTimestamp, doc, orderBy, query, onSnapshot};



