import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyDyaaBqYKBCq00DeUChW6te7UBE5ls8W0M",
        authDomain: "project-386796235322982801.firebaseapp.com",
        databaseURL: "https://project-386796235322982801.firebaseio.com",
        projectId: "project-386796235322982801",
        storageBucket: "project-386796235322982801.appspot.com",
        messagingSenderId: "1044642179786",
        appId: "1:1044642179786:web:69e644fc96d1a85d592233",
        measurementId: "G-S7ZRY3WYCC"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
