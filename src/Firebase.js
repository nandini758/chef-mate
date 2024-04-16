// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyAoSTuOib8RIOYfhZZbR1QRHNT4rE0A2xI",
  authDomain: "chef-mate-a829d.firebaseapp.com",
  projectId: "chef-mate-a829d",
  storageBucket: "chef-mate-a829d.appspot.com",
  messagingSenderId: "566558983201",
  appId: "1:566558983201:web:b8d17bf6b47bf14c754f60",
  measurementId: "G-MM4P1N0616"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { auth, db, googleAuthProvider };