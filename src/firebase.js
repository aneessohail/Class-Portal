import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import{getFirestore,collection} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBFjkX59mCXUcFCwcZtblZlXWlMbpWZ0Xw",
  authDomain: "class-portal-7bef6.firebaseapp.com",
  projectId: "class-portal-7bef6",
  storageBucket: "class-portal-7bef6.appspot.com",
  messagingSenderId: "305498790309",
  appId: "1:305498790309:web:acbc0ec58d0db72d21304c"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);

export const auth=getAuth(app)
