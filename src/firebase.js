// import { initializeApp } from 'firebase/app';
// import { getFirestore} from 'firebase/firestore/lite';
import 'firebase/firestore';
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyCK3f4fDnJwn6NQXDtcBiUUGi0aJXiFSEc",
  authDomain: "react-hooks-blog-b0b79.firebaseapp.com",
  projectId: "react-hooks-blog-b0b79",
  storageBucket: "react-hooks-blog-b0b79.appspot.com",
  messagingSenderId: "124123972946",
  appId: "1:124123972946:web:e3fdbf1c73ea36f5f0e68b"
};
 firebase.initializeApp(firebaseConfig);

 export const firestore = firebase.firestore();



// const app = initializeApp(firebaseConfig);
// export const firestore = getFirestore(app);
