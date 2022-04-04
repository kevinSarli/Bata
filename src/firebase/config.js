

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDQRy35PSLx8ql4N6IkIUQf01iScIOFMmU",
  authDomain: "bata-len.firebaseapp.com",
  projectId: "bata-len",
  storageBucket: "bata-len.appspot.com",
  messagingSenderId: "370605698746",
  appId: "1:370605698746:web:285dcc37139810e8a19c83"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = ()=>{
    return app
}