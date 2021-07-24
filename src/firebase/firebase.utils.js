import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDa6IMFvY9uA1Dj3CfcK4eGk4lkpDlzphg",
  authDomain: "crwn-db-d360a.firebaseapp.com",
  projectId: "crwn-db-d360a",
  storageBucket: "crwn-db-d360a.appspot.com",
  messagingSenderId: "1001845087584",
  appId: "1:1001845087584:web:dac31ddc970595dfce5205",
  measurementId: "G-EKSX0XZ1T9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;