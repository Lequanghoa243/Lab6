import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/database';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArOnL5y0L1NcjphDccoCw2xQ4rG1BNA6Y",
    authDomain: "photo-77b4d.firebaseapp.com",
    projectId: "photo-77b4d",
    storageBucket: "photo-77b4d.appspot.com",
    messagingSenderId: "885724494782",
    appId: "1:885724494782:web:d78abb5229086b70d397ef",
    measurementId: "G-PSVXN7480Q"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export { db, auth, storage };