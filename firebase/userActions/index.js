import { db } from "../initFirebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { USERS } from "../collection.constants";
export const createUser = async (id, data) => {
  try {
    const userRef = collection(db, USERS);

    const newUser = await setDoc(doc(userRef, id), {
      ...data,
    });

    return newUser;
  } catch (error) {
    return error.message;
  }
};

export const getUser = async (id) => {
  const docRef = doc(db, USERS, id);
  const docSnap = await getDoc(docRef);
  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    return null;
  }
};
