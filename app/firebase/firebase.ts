// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, User } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjLWQtm39_Hm7vhPC3Y8OUt_nJQtrfRE8",
  authDomain: "hnc-yt-clone.firebaseapp.com",
  projectId: "hnc-yt-clone",
  appId: "1:544687017311:web:bf2943fc904c765b687aea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signInWithGoogle() {
  return signInWithPopup(auth, new GoogleAuthProvider());
}

export function signOut() {
  return auth.signOut();
}

export function onAuthStateChangedHelper(callback: (user: User | null) => void) {
  return onAuthStateChanged(auth, callback);
}