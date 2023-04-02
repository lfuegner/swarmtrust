// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAG9eH4dMon4DsiDd7EXU9aGREFzKvQlXg",
  authDomain: "swarmtrust.firebaseapp.com",
  databaseURL: "https://swarmtrust-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "swarmtrust",
  storageBucket: "swarmtrust.appspot.com",
  messagingSenderId: "730358675001",
  appId: "1:730358675001:web:b76ded2a26754e62047fe8",
  measurementId: "G-NG7PZYHR4N"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);