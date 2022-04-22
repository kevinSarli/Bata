import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDQRy35PSLx8ql4N6IkIUQf01iScIOFMmU",
  authDomain: "bata-len.firebaseapp.com",
  projectId: "bata-len",
  storageBucket: "bata-len.appspot.com",
  messagingSenderId: "370605698746",
  appId: "1:370605698746:web:285dcc37139810e8a19c83"
};

// Inicializacón de Firebase
const app = initializeApp(firebaseConfig);

//Configuración de Firestore
const db = getFirestore(app);

// Configuración de la autenticación de Google
const googleAuthProvider = new GoogleAuthProvider();

export {
    db,
    googleAuthProvider
}





