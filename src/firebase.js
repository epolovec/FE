import { initializeApp } from 'firebase/app';
import { getDatabase } from "firebase/database";




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfcW7nPFr_Ve5jZ-F0BaK12H7z3g78u1w",
  authDomain: "bridge-project-bd37d.firebaseapp.com",
  databaseURL: "https://bridge-project-bd37d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "bridge-project-bd37d",
  storageBucket: "bridge-project-bd37d.appspot.com",
  messagingSenderId: "277179894890",
  appId: "1:277179894890:web:0a3670bcb487991dfa4e13"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const database = getDatabase();

// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
  
export default app;
