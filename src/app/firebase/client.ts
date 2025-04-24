import { initializeApp, getApp, getApps} from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD3yc6HBDZ7v6R6fq7kHobjniWxt_P55is",
  authDomain: "prepwise-f8617.firebaseapp.com",
  projectId: "prepwise-f8617",
  storageBucket: "prepwise-f8617.firebasestorage.app",
  messagingSenderId: "877659448291",
  appId: "1:877659448291:web:a17687771a5be72886f6d6",
  measurementId: "G-8XFJRMBKC8"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
