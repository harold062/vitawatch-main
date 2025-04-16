import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig.js";

const getData = async () => {
  const querySnapshot = await getDocs(collection(db, "Administrators"));
  // const querySnapshot = await getDocs(collection(db, "vitawatch", "users")); 
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} =>`, doc.data());
  });
};

getData();
