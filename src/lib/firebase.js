// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { getAnalytics } from "firebase/analytics";
import { auth } from "firebaseui";

const firebaseConfig = {
  apiKey: "AIzaSyDVzHoKlGfN2F3Z0V8b0kRLHNESe6YXbFc",
  authDomain: "oasis-nft.firebaseapp.com",
  projectId: "oasis-nft",
  storageBucket: "oasis-nft.appspot.com",
  messagingSenderId: "417325698420",
  appId: "1:417325698420:web:46966db045f8ae18b3b021",
  measurementId: "G-92D5FR2SNQ"
};

// Initialize Firebase
export const app = firebase.initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const ui = new auth.AuthUI(firebase.auth());
