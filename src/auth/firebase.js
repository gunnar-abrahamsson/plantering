import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
	apiKey: "AIzaSyDj27oNWuwVkR60v4PF8CxHlr7AyS5qNSY",
    authDomain: "frontend-6b361.firebaseapp.com",
    databaseURL: "https://frontend-6b361.firebaseio.com",
    projectId: "frontend-6b361",
    storageBucket: "frontend-6b361.appspot.com",
    messagingSenderId: "607009471313",
    appId: "1:607009471313:web:239bfb637c66b9c5753170"
};

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

export {auth, db}