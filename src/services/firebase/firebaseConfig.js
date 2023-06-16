import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAttF42xDzKLZ7mTeCodTRSK_JojfXroY4",
    authDomain: "luciabeautystudio.firebaseapp.com",
    projectId: "luciabeautystudio",
    storageBucket: "luciabeautystudio.appspot.com",
    messagingSenderId: "834775657659",
    appId: "1:834775657659:web:78270461f7edb673b28d9e"
  };

  const app = initializeApp(firebaseConfig)
  export const db = getFirestore(app)