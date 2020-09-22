import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyA08O3wwZFoY-TU2vs7tZ5091tbplyVJhY",
    authDomain: "twitter-clone-14922.firebaseapp.com",
    databaseURL: "https://twitter-clone-14922.firebaseio.com",
    projectId: "twitter-clone-14922",
    storageBucket: "twitter-clone-14922.appspot.com",
    messagingSenderId: "465360903777",
    appId: "1:465360903777:web:e7d84a5e1988e5f0311420"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;