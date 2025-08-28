// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAdkLYPTCamy-zMPrd2wZf-vgTEQOVV3Uc",
  authDomain: "mathplay-8fdfc.firebaseapp.com",
  projectId: "mathplay-8fdfc",
  storageBucket: "mathplay-8fdfc.firebasestorage.app",
  messagingSenderId: "546314869348",
  appId: "1:546314869348:web:8398498a7ef5be1c711d71",
  measurementId: "G-HE740RHRGB"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Exporta os serviços
export const auth = getAuth(app);
export const db = getFirestore(app);
