import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { collection, getDocs } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCMUh9bAtkjbWvmMh6ML2loZC6ic4kYeRA",
  authDomain: "deca-academy-app.firebaseapp.com",
  projectId: "deca-academy-app",
  storageBucket: "deca-academy-app.appspot.com",
  messagingSenderId: "3514336637",
  appId: "1:3514336637:web:a60249924bba4d7559f814",
  measurementId: "G-XSJVN0CMRS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const docRef = doc(db, "cities", "SF");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }


export { db };
// const analytics = getAnalytics(app);
// export const db = getFirestore(app);


// export const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });