import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Paste your firebaseConfig from Firebase Console here
const firebaseConfig = {
    apiKey: "AIzaSyAIHBi7e8JvIg7NqccMTnYEMdi2hkzC8Qg",
    authDomain: "summative-5fe69.firebaseapp.com",
    projectId: "summative-5fe69",
    storageBucket: "summative-5fe69.firebasestorage.app",
    messagingSenderId: "819507768160",
    appId: "1:819507768160:web:6e08ac0a00c5c7cd1b8c05"
};

const config = initializeApp(firebaseConfig)
const auth = getAuth(config);
const firestore = getFirestore(config);

export { auth, firestore };