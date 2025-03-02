import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { appEnv } from './env';

const firebaseConfig = {
  apiKey: appEnv.apiKey,
  authDomain: appEnv.authDomain,
  databaseURL: appEnv.databaseURL,
  projectId: appEnv.projectId,
  storageBucket: appEnv.storageBucket,
  messagingSenderId: appEnv.messagingSenderId,
  appId: appEnv.appId,
  measurementId: appEnv.measurementId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);