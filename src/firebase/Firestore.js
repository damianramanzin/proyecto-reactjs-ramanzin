import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCkNrJU75dKr-aWmHH415yEQnH27eVyHF4",
    authDomain: "proyecto-react37555.firebaseapp.com",
    projectId: "proyecto-react37555",
    storageBucket: "proyecto-react37555.appspot.com",
    messagingSenderId: "674740706394",
    appId: "1:674740706394:web:7ce0a98c91504d8c570c63",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export default firestore;