import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, getDocs } from "firebase/firestore";

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

export default async function searchDatabase(_data) {
    const data = _data;
    const userType = data.get('userType');
    const userId = data.get('userId');
    let collectionName = '';

    switch(userType){
        case 'student':
            collectionName = '학생';
            break;
        case 'teacher':
            collectionName = '관리자';
            break;
        default:
            break;
    }

    const q = query(collection(db, collectionName));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        if(doc.id === userId){
            console.log('eee');
            return doc.data();
            
        }else{
            alert('회원 정보가 없습니다.');
            return false;
        }
    });
}

// const docRef = doc(db, "cities", "SF")
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   console.log("No such document!");
// }

// export default searchDatabase;


// const analytics = getAnalytics(app);
// export const db = getFirestore(app);


// export const querySnapshot = await getDocs(collection(db, "users"));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });