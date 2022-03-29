import { initializeApp } from "firebase/app";
import { getFirestore, setDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyArscp4eDxf8TqdyUIliP73rpYPrgRXolI",
  authDomain: "pairology-app.firebaseapp.com",
  projectId: "pairology-app",
  storageBucket: "pairology-app.appspot.com",
  messagingSenderId: "462933146119",
  appId: "1:462933146119:web:cb2dbff68e0f868b9508a2",
  measurementId: "G-F2G3FLPK0G"
})

export const db = getFirestore(app);
export const auth = getAuth(app);