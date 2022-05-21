import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyBh55WndQB3skZwwgkoBAJfcHjuy5bqw0c",
    authDomain: "miniblog-5391d.firebaseapp.com",
    projectId: "miniblog-5391d",
    storageBucket: "miniblog-5391d.appspot.com",
    messagingSenderId: "6347031114",
    appId: "1:6347031114:web:4318a180f1188b4529dcb3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }