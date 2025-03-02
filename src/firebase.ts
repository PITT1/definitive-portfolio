import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDpAQh0_eSa8ek6TgeQDbSYt6b-9m0D32A",
  authDomain: "likes-count-94186.firebaseapp.com",
  databaseURL: "https://likes-count-94186-default-rtdb.firebaseio.com",
  projectId: "likes-count-94186",
  storageBucket: "likes-count-94186.firebasestorage.app",
  messagingSenderId: "914108387002",
  appId: "1:914108387002:web:230e41f5a9516029f13c83",
  measurementId: "G-PGMPN3295H"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);