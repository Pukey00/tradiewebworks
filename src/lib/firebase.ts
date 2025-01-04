import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB_6x4PUi-ZmtmDskY3CHiQeTuVyIQMxXY",
  authDomain: "tradie-web-works.firebaseapp.com",
  projectId: "tradie-web-works",
  storageBucket: "tradie-web-works.firebasestorage.app",
  messagingSenderId: "224053217847",
  appId: "1:224053217847:web:285d97ab411089455a8db2",
  measurementId: "G-SRTNJZ85ZZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);