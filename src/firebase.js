import firebase from "firebase/compat/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAf_0YBIOAXV8ACM2-GN9b5V1NT7LFqSx4",
  authDomain: "v-44157.firebaseapp.com",
  projectId: "v-44157",
  storageBucket: "v-44157.appspot.com",
  messagingSenderId: "1040323159302",
  appId: "1:1040323159302:web:d5394fe3971749b5f0aa87",
  //   measurementId: "G-KRE1BCVXBL",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
