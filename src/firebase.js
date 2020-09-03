import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCMlfk_w1uLoHEMP53CKz-I_kB6XCL4koE",
  authDomain: "facebook-messenger-clone-d5d2a.firebaseapp.com",
  databaseURL: "https://facebook-messenger-clone-d5d2a.firebaseio.com",
  projectId: "facebook-messenger-clone-d5d2a",
  storageBucket: "facebook-messenger-clone-d5d2a.appspot.com",
  messagingSenderId: "808983378353",
  appId: "1:808983378353:web:fa33235f4191058fe36590",
  measurementId: "G-L0JEH6JGZR",
});

const db = firebaseApp.firestore();

export default db;
