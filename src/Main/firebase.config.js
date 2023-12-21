// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_PLOEaoT4-XYqJGxCqMXf4igAoAImnq8",
  authDomain: "scic-project-ee829.firebaseapp.com",
  projectId: "scic-project-ee829",
  storageBucket: "scic-project-ee829.appspot.com",
  messagingSenderId: "359779059520",
  appId: "1:359779059520:web:bf729a1a611c2243b31ca5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth= getAuth(app);
export default auth;