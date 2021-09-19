// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,

} from "firebase/firestore";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  apiKey: "AIzaSyCJFn5x9X0rMn-NHt-W3fiAxjk7kiPqPN4",
  authDomain: "app-edu-app-dev.firebaseapp.com",
  projectId: "app-edu-app-dev",
  databaseURL: "https://app-edu-app-dev.firebaseio.com",
  // storageBucket: "azeem-nana.appspot.com",
  // messagingSenderId: "918908909068",
  appId: "1:322592366593:web:ed5f4b47f58dc5fb37a000",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);


//CRUD

// export const fetchElements = async (element) => {};
// export const createElement = async (element) => {};
// export const updateElement = async (element) => {};
// export const deleteElement = async (element) => {};
