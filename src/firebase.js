import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyC0XzrQBdOHlNzl0gp0tH7MxKVev06pakg",
  authDomain: "let-s-chat-81a27.firebaseapp.com",
  projectId: "let-s-chat-81a27",
  storageBucket: "let-s-chat-81a27.appspot.com",
  messagingSenderId: "895023908304",
  appId: "1:895023908304:web:8c5a2f0cf6fc2ccc65a5d5",
  measurementId: "G-6H7N24ZW2J"
};

// initialize app
const app = initializeApp(firebaseConfig);
// get auth firebase 
const Auth = getAuth(app);
// connect data base
const db = getFirestore(app); 
// connect to storage firebase
const storage = getStorage(app)
// export database, storage and auth
export {Auth,db,storage}