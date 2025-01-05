import { initializeApp } from 'firebase/app';
import { getAuth, connectAuthEmulator } from 'firebase/auth';
import { getFirestore, connectFirestoreEmulator } from 'firebase/firestore';

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

// Initialize Firebase services
const auth = getAuth(app);
const db = getFirestore(app);

// Connect to emulators if in development
if (import.meta.env.DEV) {
  try {
    connectAuthEmulator(auth, 'http://localhost:9099');
    connectFirestoreEmulator(db, 'localhost', 8080);
  } catch (error) {
    console.error("Error connecting to emulators:", error);
  }
}

export { auth, db };