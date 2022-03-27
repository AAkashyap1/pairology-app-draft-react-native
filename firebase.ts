import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyArscp4eDxf8TqdyUIliP73rpYPrgRXolI",
  authDomain: "pairology-app.firebaseapp.com",
  projectId: "pairology-app",
  storageBucket: "pairology-app.appspot.com",
  messagingSenderId: "462933146119",
  appId: "1:462933146119:web:cb2dbff68e0f868b9508a2",
  measurementId: "G-F2G3FLPK0G"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);