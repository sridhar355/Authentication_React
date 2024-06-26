import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAfsmfBQnGFRlc0-ftOs3FBuT5iPuRC_dA",
  authDomain: "fir-483f7.firebaseapp.com",
  projectId: "fir-483f7",
  storageBucket: "fir-483f7.appspot.com",
  messagingSenderId: "774164705346",
  appId: "1:774164705346:web:1a6820748854396e84bddb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);