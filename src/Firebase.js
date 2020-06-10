import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "--apiKey--",
    authDomain: "--authDomain--",
    databaseURL: "--databaseURL--",
    projectId: "--projectId--",
    storageBucket: "--storageBucket--",
    messagingSenderId: "--messagingSenderId--",
    appId: "--appId--",
    measurementId: "--measurementId--"
};


firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();

export default firebase;