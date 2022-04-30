import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

// firebase config
const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:process.env.REACT_APP_AUTH_DOMAIN ,
    databaseURL: process.env.REACT_APP_DATABASE_URL ,
    projectId:process.env.REACT_APP_PROJECT_ID ,
    storageBucket:process.env.REACT_APP_STORAGE_BUCKET ,
    messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID ,
    appId:process.env.REACT_APP_APP_ID ,
    measurementId:process.env.REACT_APP_MEASUREMENT_ID
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