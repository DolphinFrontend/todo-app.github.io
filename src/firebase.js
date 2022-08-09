// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZIHfmGCpnUTgjO16vqy-6t8wXc0j_2vQ",
  authDomain: "todoapp-410fa.firebaseapp.com",
  projectId: "todoapp-410fa",
  storageBucket: "todoapp-410fa.appspot.com",
  messagingSenderId: "907939847597",
  appId: "1:907939847597:web:74375b276ad0376255d524"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)