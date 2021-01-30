// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAwCp69Zk8C_J8t9KvxAKF608bwQ6IHsgs",
  authDomain: "clone-fa232.firebaseapp.com",
  projectId: "clone-fa232",
  storageBucket: "clone-fa232.appspot.com",
  messagingSenderId: "575768935931",
  appId: "1:575768935931:web:5b4460e4e2ccbca0da1f5e",
  measurementId: "G-NKK1ZGRM7B",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
