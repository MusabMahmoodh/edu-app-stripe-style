// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  query,
  where,
  getDocs,
  getDoc,
  doc,
  setDoc,
} from "firebase/firestore";
import { USERS } from "./collection.constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // process.env.NEXT_PUBLIC_FIREBASE_API_KEY
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DB_URL,
  // storageBucket: "azeem-nana.appspot.com",
  // messagingSenderId: "918908909068",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

//CRUD
export const fetchUser = async (id) => {
  const docRef = doc(db, USERS, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};

export const createUser = async (id, data) => {
  try {
    const userRef = collection(db, USERS);

    await setDoc(doc(userRef, id), {
      ...data,
    });

    return true;
  } catch (error) {
    return error.message;
  }
};
export const fetchElements = async (element) => {};
export const createElement = async (element) => {};
export const updateElement = async (element) => {};
export const deleteElement = async (element) => {};
