import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCsXcHvuL0y4Q7k9fI0BTtqvM31RR2OJDc",
  authDomain: "taskmanager-a60ee.firebaseapp.com",
  projectId: "taskmanager-a60ee",
  storageBucket: "taskmanager-a60ee.appspot.com",
  messagingSenderId: "119036805015",
  appId: "1:119036805015:web:c7e710f514bfc233174ed2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;