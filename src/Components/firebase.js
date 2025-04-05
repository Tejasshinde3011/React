// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcXsjIhITwDhrWPr5-J8mYA7a1Y2MZWsY",
  authDomain: "techstore-8593f.firebaseapp.com",
  projectId: "techstore-8593f",
  storageBucket: "techstore-8593f.firebasestorage.app",
  messagingSenderId: "735912958739",
  appId: "1:735912958739:web:ed9f85db257d3f818d18e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {db}