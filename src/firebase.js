
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAaUtxn1sXQKg01r1YctkHup6cv8sQkgZM",
  authDomain: "fire-737b8.firebaseapp.com",
  projectId: "fire-737b8",
  storageBucket: "fire-737b8.firebasestorage.app",
  messagingSenderId: "844320942617",
  appId: "1:844320942617:web:21cd662fd567884e3b1888",
  measurementId: "G-PFW1Y0WG0T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// export default app
export const auth = getAuth(app);
