import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxtQte4hsqdyS2-c_NwvyPbjNXsi37-to",
    authDomain: "mern-messaging-app-csci3916.firebaseapp.com",
    projectId: "mern-messaging-app-csci3916",
    storageBucket: "mern-messaging-app-csci3916.appspot.com",
    messagingSenderId: "318890769256",
    appId: "1:318890769256:web:3cc8ef7aae3006f008b4dd",
    measurementId: "G-SDFEFFVEC5"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
