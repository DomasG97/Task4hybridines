import app from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'


// Optionally import the services that you want to use
//import {...} from "firebase/auth";
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDkYHcYzNnPiaW0dCtdXW4YSzzpEiyFdjQ",
    authDomain: "qrapp-d03e0.firebaseapp.com",
    databaseURL: "https://qrapp-d03e0-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "qrapp-d03e0",
    storageBucket: "qrapp-d03e0.appspot.com",
    messagingSenderId: "138515770347",
    appId: "1:138515770347:web:37683c8d3416b858f087ae"
  };

app.initializeApp(firebaseConfig);

export default app