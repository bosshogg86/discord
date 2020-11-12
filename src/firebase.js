import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyA9ktuaUyoasmoaHCQpFQf32lafSJZ1QKA",
  authDomain: "discord-47ed9.firebaseapp.com",
  databaseURL: "https://discord-47ed9.firebaseio.com",
  projectId: "discord-47ed9",
  storageBucket: "discord-47ed9.appspot.com",
  messagingSenderId: "821932302346",
  appId: "1:821932302346:web:00aebf4f25a66c9aabbff3",
  measurementId: "G-GEJ0BZK72X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
