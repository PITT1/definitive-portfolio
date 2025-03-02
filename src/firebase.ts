import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId, appId, measurementId } from './env';

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  databaseURL: databaseURL,
  projectId: projectId,
  storageBucket: storageBucket,
  messagingSenderId: messagingSenderId,
  appId: appId,
  measurementId: measurementId
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);