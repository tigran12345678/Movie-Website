// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHuusPR2mHcjM1rVmS4gEpRDZ1n5Mgyis",
  authDomain: "movie-website-e6167.firebaseapp.com",
  projectId: "movie-website-e6167",
  storageBucket: "movie-website-e6167.firebasestorage.app",
  messagingSenderId: "557611673942",
  appId: "1:557611673942:web:54d056af3028aab3650ef7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();